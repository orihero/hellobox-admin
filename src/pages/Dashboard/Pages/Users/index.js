import React, { useEffect, useState } from "react";
import Image from "../../../../assests/wp2803554.jpeg";
import { requests } from "../../../../api/requests";
import {
  Container,
  UserBox,
  Table,
  Td,
  Tr,
  TrBox,
  ImgBox,
  Users,
  Name,
  Nuber,
  Img,
} from "./style";
import Dropdown from "../../../../components/navigation/Dropdown";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [partners, setPartners] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState();
  let effect = async () => {
    try {
      let res = await requests.users.getUsers();
      setUsers(res.data);
    } catch (error) {}
    try {
      let res = await requests.partners.getPartners();
      setPartners(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  }, []);

  const onChangeElement = async (
    { phone, first_name, last_name, chat_id, cart_id, tg_id, id, image_url },
    partner
  ) => {
    try {
      console.log(partner);
      let res = await requests.users.editUser({
        first_name,
        last_name,
        chat_id,
        tg_id,
        phone,
        cart_id,
        partner_id: partner.id,
        id,
        image_url,
      });
      await effect();
    } catch (error) {
      alert("ERROR IN ASSIGNING USER TO PARTNER");
    }
  };

  return (
    <Container>
      {users.map((e, i) => {
        return (
          <UserBox>
            <Table>
              <Td>
                <Tr>
                  <TrBox>
                    <ImgBox>
                      <Img src={e.image_url} />
                    </ImgBox>
                  </TrBox>
                </Tr>
              </Td>
              <Td>
                <Tr>
                  <Users>
                    <Name>
                      {e.first_name} {e.last_name}
                    </Name>
                  </Users>
                </Tr>
              </Td>
              <Td>
                <Tr>
                  <Nuber>{e.phone}</Nuber>
                </Tr>
              </Td>
              <Td>
                <Tr />
              </Td>
              <Td>
                <Tr>
                  <Dropdown
                    zIndex={users.length - i}
                    data={partners?.length ? partners : []}
                    setSelected={(el) => onChangeElement(e, el)}
                    selected={e.partner_id || -1}
                    placeholder={"Select Partner"}
                    name={
                      !!selectedPartners
                        ? selectedPartners.name
                        : "Select Partner"
                    }
                  />
                </Tr>
              </Td>
            </Table>
          </UserBox>
        );
      })}
    </Container>
  );
}

export default UsersPage;
