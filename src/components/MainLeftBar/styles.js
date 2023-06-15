import styled from "styled-components";

export const Input = styled.input`
  min-width: 100px;
  width: 80%;
  height: 40px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 16px;
  outline: none;
  line-height: 18px;
  border: 1px solid #fff;
  border-radius: 5px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #e1e1e1;
  }
`;

export const Button = styled.button`
  min-width: 60px;
  width: 80px;
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
export const Title = styled.div`
  width: ${(props) => props.titleNumberWidth};
  height: 43px;
  padding: 5px 0 5px 0;
  background-color: transparent;
  margin-bottom: 10px;
  color: darkgrey;
`;

export const Form = styled.div`
  width: ${(props) => props.titleNumberWidth};
  display: flex;
  gap: 10px;
`;
export const TitleNumber = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #4cae4f;
  text-decoration: underline;
`;
