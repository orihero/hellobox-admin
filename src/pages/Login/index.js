import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../assests/6595158_preview1.png";
import {
  Body,
  LoginDiv,
  Logo,
  Title,
  SubTitle,
  Image,
  Fields,
  Username,
  InputPassword,
  InputName,
  Password,
  SigninButton,
} from "./style";
function Login() {
  return (
    <Body>
      <LoginDiv>
        <Logo>
          <Image src={image} />
        </Logo>
        <Title>Hellobox</Title>
        <SubTitle>Hi</SubTitle>
        <Fields>
          <Username>
            <i class="bx bx-user"></i>
            <InputName type="username" placeholder="username" />
          </Username>
          <Password>
            <i class="bx bx-lock-alt"></i>
            <InputPassword type="password" placeholder="password" />
          </Password>
          <Link to="/dashboard">
            <SigninButton>Logo</SigninButton>
          </Link>
        </Fields>
      </LoginDiv>
    </Body>
  );
}

export default Login;
