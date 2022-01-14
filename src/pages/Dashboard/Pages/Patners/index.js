import React, { useEffect, useState } from "react";
import { requests } from "../../../../api/requests";
import { Link } from "react-router-dom";
import {
  Container,
  PartnerBox,
  Table,
  Tr,
  Td,
  TdContainer,
  ImgBox,
  NameBox,
  Name,
  FirstName,
  Img,
  Icon,
  IconBox,
  Addnew,
  Add,
} from "./style";
import ImgCutonmer from "../../../../assests/wp2803554.jpeg";
import s from "sweetalert2";
function PatersPage() {
  const link="/dashboard/partners/edit/"
  const [partners, setPartners] = useState([])
  let effect = async () => {
    try {
      let res = await requests.partners.getPartners()
      setPartners(res.data)
    } catch (error) {

    }
  }
  useEffect(() => {
    effect()
  }, [])

  let onDelete = async (id) => {
    try {
      let res = await s.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        dangerMode: true,
        showCancelButton: true,
        showConfirmButton: true,
      });
      console.log(res);
      if (!!res.isConfirmed) {
        s.showLoading();
        let deleteRes = await requests.partners.deletePartner(id);
        await effect();
        s.hideLoading();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Addnew>
        <Link
          style={{textDecoration: "none"}}
         to="/dashboard/patners/addnew">
        <Add>
          Add new <i class="bx bx-plus"></i>
        </Add>
        </Link>
      </Addnew>
      {partners?.map(e => {
        return <PartnerBox>
          <Table>
            <Tr onClick={()=>{
              console.log(e)}
            }>
              <Td>
                <TdContainer>
                  <ImgBox>
                    <Img src={e.image} />
                  </ImgBox>
                  <NameBox>
                    <Name>{e.name}</Name>
                    {/* <FirstName>Sinhanya</FirstName> */}
                  </NameBox>
                </TdContainer>
              </Td>
              <Td>Address: {e.address}</Td>
              <Td>Category: Producta </Td>
            </Tr>
          </Table>
          <Icon>
            <Link
              style={{
                textDecoration:"none"
              }}

              to=
                  {
                    {
                      pathname: `${link}${e.id}`,
                      editProps:{
                        id:e.id,
                        img_url:e.image_url,
                        name:e.name
                      }
                    }
                  }

            >
                <IconBox>
                  <i class="bx bxs-edit"></i>
                </IconBox>
            </Link>
            <IconBox onClick={() => onDelete(e.id)}>
              <i class="bx bx-trash-alt"></i>
            </IconBox>
          </Icon>
        </PartnerBox>
      })}
    </Container>
  );
}

export default PatersPage;
