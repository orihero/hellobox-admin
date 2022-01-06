import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  overflow-y: hidden;
  /* padding: 15px; */
  padding: 0px 15px;
  align-items: center;
  transition: height 0.5s ease;
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 20px;
  flex-direction: column;
  /* max-height: 100px; */
`;
export const Table = styled.table`
  width: 80%;
  margin: 0.5em 0.5em;
`;
export const Td = styled.td`
  /* height: 50px; */
`;
export const Tr = styled.tr`
  font-size: 1em;
  font-weight: 400;
  text-align: center;
`;
export const ProdoctsBox = styled.div`
  margin: 1em 1.7em;
  border-radius: 10px;
  display: flex;
  width: 95%;
  align-items: center;
  box-shadow: -3px -3px 7px #fff, 3px 3px 5px #ceced1;
`;
export const ProdoctsContainer = styled.div`
  margin: 1em 0;
  border-radius: 10px;
  display: flex;
  width: 98%;
  margin-bottom: 10px;
  align-items: center;
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
  &:active {
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
export const Tdbox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Sold = styled.span``;
export const Activated = styled.span``;
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
