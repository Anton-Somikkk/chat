import * as S from "./styles";

export default function Message({ message, identify }) {
  return (
    <S.MessageBlock identify={identify}>
      <S.Message identify={identify}>{message}</S.Message>
    </S.MessageBlock >
  );
}
