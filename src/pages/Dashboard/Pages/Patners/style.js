import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  flex: 1;
`;
export const PartnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  margin-top: 0.3em;
  border-radius: 0.7em;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`;
export const Table = styled.table`
  width: 60%;
  border-radius: 0.7em;
`;
export const Td = styled.td`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;
export const Tr = styled.tr`
  display: flex;
  width: 100%;

`;
export const TdContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.7em;
`;
export const ImgBox = styled.div`
  display: flex;
  border-radius: 50%;
  align-content: center;
  justify-content: center;
  margin-left: 0.5em;
`;
export const Img = styled.img`
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
`;
export const Name = styled.span`
  display: flex;
  flex-direction: column;
`;
export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.5em;
  font-size: 18px;
  font-weight: 600;
`;
export const FirstName = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0.2em;
`;
export const Spanbox = styled.div`
  display: flex;
  max-width: 30%;
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
  border-radius: 0.6em;
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
    font-size: 1.2em;
    margin-left: 4px;
    padding-top: 3.5px;
  }
  color: #31344b;
  &:hover {
    box-shadow: inset 3px 3px 5px #cbced1, inset -3px -3px 5px #fff;
    color: #3498db;
  }
`;
export const Addnew = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.3em;
`;
