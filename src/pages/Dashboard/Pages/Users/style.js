import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  flex: 1;
  margin-top: 25px;
`;
export const UserBox = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
  margin-top: 15px;
`;
export const TrBox = styled.div`
  display: flex;
`;
export const Table = styled.table`
  display: flex;
  width: 60%;
`;
export const Td = styled.td`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Tr = styled.tr`
  font-size: 18px;
  font-weight: 600;
  color: #31344b;
`;
export const Users = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items:  center;
`;
export const ImgBox = styled.div`
  width: 2.5em;
  height: 2.5em;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 7em;
  box-shadow: inset -3px -3px 7px #fff, inset 3px 3px 5px #ceced1;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const Name = styled.span`
  width: 100%;
`;
export const Nuber = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-left: 50px; 
`;
