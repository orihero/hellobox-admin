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
import Dropdown from "../../../../components/navigation/Dropdown";
import { useHistory } from "react-router-dom";
function PatersPage() {
  const link="/dashboard/partners/edit/"
  const [partners, setPartners] = useState([])
  const [users, setUsers] = useState([])
  let history = useHistory();
  let effect = async () => {
    try {
      let res = await requests.partners.getPartners()
      setPartners(res.data)
      res = await requests.users.getPartnerUsers();
      setUsers(res.data)
    } catch (error) {

    }
  }
  useEffect(() => {
    effect()
  }, [])
  let onSelect = async(user,partner_id)=>{
    try {
      let res = requests.users.editUser({...user,partner_id})
      history.replace("/dashboard/patners")
    } catch (error) {
      
    }
  }
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
        let user = users.find(el=>el.partner_id===e.id)
        console.log({user,e:e});
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
                  </NameBox>
                </TdContainer>
              </Td>
              <Td>Address: {e.address}</Td>
              <Td><Dropdown
							data={users?.length ? users.map(e=>({...e,name:e.first_name+" "+e.phone})) : []}
							setSelected={(el)=>onSelect(el,e.id)}
							selected={
								e.partner_id
							}
							placeholder={'Select user'}
							name={user?.first_name+" "+user?.phone}
						/> </Td>
              
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
