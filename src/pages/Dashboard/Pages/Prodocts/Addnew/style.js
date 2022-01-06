import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 95%;
    flex-direction: column;
    min-height: 100vh;
`;
export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 25px 25px;
    box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
`;
export const ImageContainer = styled.div`
    width: 65px;
    height: 65px;
    display: flex;
    border-radius: 10px;
    margin: 0px 10px;
`;
export const IconBotton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 5%;
    height: 80%;
    align-items: center;
    margin: 0px 5px;
`;
export const Icon = styled.div`
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    &:active {
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
        color: #3498db;
    }
`;
export const Iconn = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.3%;
    border-radius: 50%;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    &:active {
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
        color: #3498db;
    }
`;
export const ImgBox = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Image = styled.img`
    width: 80%;
    height: 80%;
    border-radius: 10px;
`;
export const Imagee = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const BottonContainer = styled.div`
    display: flex;
`;
export const Botton = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 7px;
    margin: 15px 10px;
    border: none;
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    font-weight: bold;
    font-size: 16px;
    &:active {
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
        color: #3498db;
    }
`;
export const InputAreContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
export const Textarea = styled.textarea`
    outline: none;
    border: none;
    width: 95%;
    height: 210px;
    border-radius: 10px;
    padding: 15px 15px;
    font-size: 16px;
    margin: 20px 0px;
    resize: none;
    box-shadow: 2px 2px 4px #fff, -3px -3px 5px #ceced1;
`;
export const Input = styled.input`
    outline: none;
    width: 95%;
    height: 50px;
    font-size: 16px;
    border: none;
    margin: 20px 20px;
    border-radius: 10px;
    padding-left: 15px;
    box-shadow: 1px 1px 3px #fff, -3px -3px 5px #ceced1;
`;
export const CategoriyaPatnerContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
`;
export const InputContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin: 15px 10px;
`;
export const Inputt = styled.input`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    padding-left: 10px;
    border: none;
    outline: none;
    box-shadow: 1px 1px 3px #fff, -3px -3px 5px #ceced1;
    background: #ecf0f3;
`;
export const InputName = styled.input`
    width: 80%;
    height: 70%;
    outline: none;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    background: #ecf0f3;
    box-shadow: 1px 1px 3px #fff, -2px -2px 4px #ceced1;
    font-size: 16px;
`;
export const NameImageContainer = styled.div`
    display: flex;
    height: 10vh;
    border-radius: 10px;
    align-items: center;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    margin-bottom: 10px;
`;
export const AllContainer = styled.div`
    width: 100%;
    display: flex;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    border-radius: 15px;
    margin-top: 22px;
`;
export const AddNewContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;
export const Add = styled.button`
    display: flex;
    align-items: center;
    background: #ecf0f3;
    border: none;
    border-radius: 10px;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    font-weight: bold;
    font-size: 16px;
    width: 8rem;
    height: 3rem;
    justify-content: center;
    margin: 20px 0px;
    & i {
        margin-left: 5px;
        font-size: 20px;
    }
    &:active {
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
        color: #3498db;
    }
`;
export const CanacelSaveContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 15px 0px;
`;
export const Cancel = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 10px;
    margin-right: 10px;
    border: none;
    box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
    background: #ecf0f3;
    &:active {
        box-shadow: 3px 3px 7px #fff, -3px -3px 5px #ceced1;
        color: #3498db;
    }
`;
