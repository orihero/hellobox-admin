import styled from "styled-components";

export const Body = styled.body`
  margin: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  background: #ecf0f3;
`;
export const LoginDiv = styled.div`
  width: 430px;
  height: 700px;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
`;
export const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background: #ecf0f3;
 align-items: center;
 box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`;
export const Image = styled.img`
  width: 65px;
  height: 65px;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 28px;
  padding-top: 24px;
  letter-spacing: 0.5px;
`;
export const SubTitle = styled.div`
  text-align: center;
  font-size: 15px;
  padding-top: 7px;
  letter-spacing: 3px;
`;
export const Fields  = styled.div`
  width: 100%;
  padding: 75px 5px 5px 5px;
`
export const Username = styled.div`
  margin-bottom: 30px;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1,
  inset -8px -8px 8px #fff;
  display: flex;
  align-items: center;
  & i{
    font-size: 23px;
    margin: 0 8px -3px 18px;
    
  }
`
export const InputName = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #555;
  padding: 20px 10px 20px 5px;
`
export const InputPassword = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #555;
  padding: 20px 10px 20px 5px;
`
export const Password = styled.div`
   margin-bottom: 30px;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1,
  inset -8px -8px 8px #fff;
  display: flex;
  align-items: center;
  & i{
    font-size: 23px;
    margin: 0 8px -3px 18px;
    
  }
`
export const SigninButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background: #02c8db;
  box-shadow: 3px 3px 8px #b1b1b1,
  -3px -3px 8px #fff;
  &:hover {
    background: #50e5b5;
  }
  &:active {
    background: yellow;
  }
`
