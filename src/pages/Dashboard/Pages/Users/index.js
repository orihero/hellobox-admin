import React, { useEffect, useState } from "react";
import Image from "../../../../assests/wp2803554.jpeg"
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

function UsersPage() {
  const [users, setUsers] = useState([])
  let effect = async () => {
    try {
      let res = await requests.users.getUsers()
      setUsers(res.data)
    } catch (error) {

    }
  }
  useEffect(() => {
    effect()
  }, [])

  return (
    <Container>
      {users.map(e => {
        return <UserBox>
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
                  <Name>{e.first_name} {e.last_name}</Name>
                </Users>
              </Tr>
            </Td>
            <Td>
              <Tr>
                <Nuber>{e.phone}</Nuber>
              </Tr>
            </Td>
          </Table>
        </UserBox>
      })}
    </Container>
  );
}

export default UsersPage;
