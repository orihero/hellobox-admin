import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  flex: 1;
  margin-top: 20px;
  flex-direction: column;
`;
export const Table = styled.table`
  display: flex;
  width: 80%;
`;
export const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
`;
export const Tr = styled.tr`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
export const ImgBox = styled.div`
  width: 3em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #fff;
  margin-left: 20px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border-radius: 50%;
`;
export const ProdoctsBox = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  margin-top: 15px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`;
export const Icon = styled.div`
  width: 20%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  transition: all 2s ease;
  padding-right: 20px;
`;
export const IconBox = styled.div`
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  border-radius: 50%;
  margin: 5px;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
  color: #31344b;
  &:hover {
    box-shadow: inset 3px 3px 5px #cbced1, inset -3px -3px 5px #fff;
    color: #3498db;
  }
`;
export const Addnew = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7em;
  height: 3em;
  border-radius: 10px;
  font-size: 1em;
  font-weight: 600;
  box-shadow: -4px -4px 8px #fff, 4px 4px 6px #ceced1;
  margin: 10px 2px;
  & i {
    font-size: 1.5em;
    margin-left: 4px;
    padding-top: 3.5px;
  }
  color: #31344b;
  &:hover {
    box-shadow: inset 3px 3px 5px #cbced1, inset -3px -3px 5px #fff;
    color: #3498db;
  }
`;
