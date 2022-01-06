import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 95%;
    margin: 10px 0px;
`
export const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const IconContainer = styled.div`
    display: flex;
    margin: 10px 5px;
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    border-radius: 10px;

`
export const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 9.1px 9.1px;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 20px;
    background: #9ec9e2;
    & i{
        font-size: 1.5rem;
        color: #fff;
    }
`
export const Input = styled.input`
    width: 92%;
    height: 45px;
    padding-left: 10px;
    margin-left: 5px;
    outline: none;
    border: none;
    background: #ecf0f3;
    box-shadow: inset -1px -1px 5px #fff, inset 2px 2px 3px #ceced1;
    border-radius: 20px;
`