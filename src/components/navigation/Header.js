import React from "react";
import {
  HeaderContainer,
  Image,
  AdminName,
  Admin,
  ImgBox,
  AdminBox,
} from "./Header.style";
import image from "../../assests/6595158_preview1.png";

export default function Header() {
  return (
    <HeaderContainer>
      <AdminBox>
        <AdminName>Sanjar Sinhanya</AdminName>
        <Admin>Admin</Admin>
      </AdminBox>
      <ImgBox>
        <Image src={image} />
      </ImgBox>
    </HeaderContainer>
  );
}
