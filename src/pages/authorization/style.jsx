import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #f5f5f5;
`;

export const MeinBox = styled.div`
  width: 366px;
  height: 439px;
  background: #ffffff;
  border-radius: 12px;
  border: solid 1px #009805;

  display: flex;

  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.input`
  width: 278.5px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 1px solid #009805;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #e1e1e1;
  }
`;

export const OstiumButton = styled.button`
  cursor: pointer;
  width: 278px;
  height: 52px;
  background-color: #4cae4f;
  border-radius: 6px;
  border-color: #009805;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #009805;
  }
  &:active {
    background-color: #006603;
  }
`;

export const ErrorBox = styled.div`
  width: 90%;
  height: 40px;
  background: #ffffff;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.8px;
  color: red;
  margin: 0;
  padding: 0;
`;
