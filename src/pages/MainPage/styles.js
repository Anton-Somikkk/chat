import styled from "styled-components";

export const CenterBlock = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 40px;
`;

export const SendText = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 1px solid #d1d7db;
  border-radius: 5px;
  background: #d1d7db;
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #e1e1e1;
  }
`;
export const Main = styled.main`
  min-height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #fff;
`;

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;
export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #4cae4f;
  color: #fff;
  &:hover {
    background-color: #009805;
  }
  &:active {
    background-color: #006603;
  }
`;
export const Form = styled.div`
  width: 95%;
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;
export const MessageBlock = styled.div`
  display: flex;
  height: 65vh;
  gap: 15px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  overflow-y: auto;
`;
