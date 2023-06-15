import styled from "styled-components";

export const Message = styled.div`
  text-align: right;
  width: fit-content;
  max-width: 400px;
  color: #fff;
  min-height: 40px;
  padding: 5px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 1px solid #d1d7db;
  border-radius: 5px;
  padding: 8px;
  background: ${(props) => (props.identify === "send" ? "#b3bdc4" : "#66CDAA")};
`;
export const MessageBlock = styled.div`
  display: flex;
  width: 95%;

  justify-content: ${(props) =>
    props.identify === "send" ? "flex-end" : "flex-start"};
`;
