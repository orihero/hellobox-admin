import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 95%;
    border-radius: 10px;
    margin: 25px 0px;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`
export const ButtonImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 20px 20px;
`
export const Button = styled.button`
    width: 7rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    &:active{
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
  color: #3498db;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    margin-top: 20px;
`
export const ImageContainer = styled.div`
    display: flex;
    width: 17em;
    height: 15em;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`
export const Image = styled.img`
    width: 85%;
    height: 85%;
    border-radius: 10px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    border-radius: 10px;
    margin: 20px 20px;
`
export const Input = styled.input`
    margin: 25px 10px;
    height: 50px;
    border-radius: 10px;
    padding-left: 10px;
    box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
    outline: none;
    border: none;
`
export const AdrssCityContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin: 2px 0px;
`
export const AdrssCityContactInputT = styled.input`
    width: 500px;
   height: 50px;
   outline: none;
   border: none;
   padding-left: 10px;
   border-radius: 10px;
   background: #ecf0f3;
    box-shadow: 1px 1px 3px #fff, -2px -2px 4px #ceced1;
    font-size: 16px;

`

export const AdrssCityContactInput = styled.input`
   width: 220px;
   height: 50px;
   outline: none;
   border: none;
   padding-left: 10px;
   border-radius: 10px;
   background: #ecf0f3;
    box-shadow: 1px 1px 3px #fff, -2px -2px 4px #ceced1;
    font-size: 16px;
`

export const SaveContainer = styled.div`
    display: flex;
    width: 95%;
    margin-top: 10px;
`
export const ContainerSave = styled.div`
    display: flex;
    width: 95%;  
    justify-content: flex-end; 
`
export const Save = styled.button`
     margin-top: 14px;
     width: 7rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    &:active{
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
  color: #3498db;
    }
`
export const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const IconContainerr = styled.div`
    display: flex;
    margin-top: 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    border-radius: 10px;

`
export const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 20px;
    background: #9ec9e2;
    margin: 8px 8px;
    & i{
        font-size: 1.5rem;
        color: #fff;
    }
`
export const InputUser = styled.input`
    width: 90%;
    height: 45px;
    padding-left: 20px;
    margin-left: 20px;
    outline: none;
    border: none;
    background: #ecf0f3;
    box-shadow: inset -1px -1px 5px #fff, inset 2px 2px 3px #ceced1;
    border-radius: 20px;
`