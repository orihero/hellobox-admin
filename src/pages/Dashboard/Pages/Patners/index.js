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
function PatersPage() {
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
            <Tr>
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
            <IconBox>
              <i class="bx bxs-edit"></i>
            </IconBox>
            <IconBox>
              <i class="bx bx-trash-alt"></i>
            </IconBox>
          </Icon>
        </PartnerBox>
      })}
    </Container>
  );
}

export default PatersPage;
