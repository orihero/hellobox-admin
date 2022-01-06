import React, { useState } from "react";
import {
  Container,
  ProdoctsBox,
  Table,
  Td,
  Tr,
  Icon,
  IconBox,
  Wrapper,
  Sold,
  Activated,
  Tdbox,
  ProdoctsContainer,
  ImgBox,
  Img,
} from "./style";
import Image from "../../../../assests/6595158_preview1.png";

function OrderPage() {
  let [open, setOpen] = useState(false);
  let [list, setList] = useState([{}, {}, {}]);

  const onClickDrop = () => {
    setOpen((preState) => !preState);
  };

  return (
    <Container>
      {/* Order Container */}
      <ProdoctsBox>
        <Table>
          <Tr>
          <Td>
            <ImgBox>
              <Img src={Image} />
            </ImgBox>
          </Td>
            <Td>Lavash</Td>
            <Td>25000</Td>
            <Td>
              <Tdbox>
                <Sold>Sold: 10/20/2021</Sold>
                <Activated>Activated: 20/10/2021</Activated>
              </Tdbox>
            </Td>
          </Tr>
        </Table>
        <Icon>
          <IconBox onClick={onClickDrop}>
            {open ? (
              <i class="bx bx-chevron-up"></i>
            ) : (
              <i class="bx bx-chevron-down"></i>
            )}
          </IconBox>
        </Icon>
      </ProdoctsBox>
      <Wrapper style={{ height: open ? `${list.length * 100}px` : "0px" }}>
        {/* Wrapper of Products */}
        <ProdoctsContainer>
          {/* Product component */}
          <Table>
            <Tr>
              <Td>
                <ImgBox>
                  <Img src={Image} />
                </ImgBox>
              </Td>
              <Td>Lavash</Td>
              <Td>25000</Td>
              <Td>
                <Tdbox>
                  <Sold>Sold: 10/20/2021</Sold>
                  <Activated>Activated: 20/10/2021</Activated>
                </Tdbox>
              </Td>
            </Tr>
          </Table>
        </ProdoctsContainer>
        <ProdoctsContainer>
          {/* Product component */}
          <Table>
            <Tr>
              <Td>
                <ImgBox>
                  <Img src={Image} />
                </ImgBox>
              </Td>
              <Td>Lavash</Td>
              <Td>25000</Td>
              <Td>
                <Tdbox>
                  <Sold>Sold: 10/20/2021</Sold>
                  <Activated>Activated: 20/10/2021</Activated>
                </Tdbox>
              </Td>
            </Tr>
          </Table>
        </ProdoctsContainer>
        <ProdoctsContainer>
          {/* Product component */}
          <Table>
            <Tr>
              <ImgBox>
                <Img src={Image} />
              </ImgBox>
              <Td>Lavash</Td>
              <Td>25000</Td>
              <Td>
                <Tdbox>
                  <Sold>Sold: 10/20/2021</Sold>
                  <Activated>Activated: 20/10/2021</Activated>
                </Tdbox>
              </Td>
            </Tr>
          </Table>
        </ProdoctsContainer>
        <ProdoctsContainer>
          {/* Product component */}
          <Table>
            <Tr>
              <ImgBox>
                <Img src={Image} />
              </ImgBox>
              <Td>Lavash</Td>
              <Td>25000</Td>
              <Td>
                <Tdbox>
                  <Sold>Sold: 10/20/2021</Sold>
                  <Activated>Activated: 20/10/2021</Activated>
                </Tdbox>
              </Td>
            </Tr>
          </Table>
        </ProdoctsContainer>
        <ProdoctsContainer>
          {/* Product component */}
          <Table>
            <Tr>
              <Td>
                <ImgBox>
                  <Img src={Image} />
                </ImgBox>
              </Td>
              <Td>Lavash</Td>
              <Td>25000</Td>
              <Td>
                <Tdbox>
                  <Sold>Sold: 10/20/2021</Sold>
                  <Activated>Activated: 20/10/2021</Activated>
                </Tdbox>
              </Td>
            </Tr>
          </Table>
        </ProdoctsContainer>
      </Wrapper>
    </Container>
  );
}

export default OrderPage;
