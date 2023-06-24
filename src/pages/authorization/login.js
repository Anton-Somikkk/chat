import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetTokenMutation } from "../../services/api";
import * as S from "./style";

export default function Login() {
  const navigate = useNavigate();
  const [idInstance, setIdInstance] = useState("");
  const [errors, setErrors] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const [trigger, { data, error, isSuccess }] = useGetTokenMutation();

  const handleLogin = () => {
    trigger({
      idInstance: idInstance,
      apiTokenInstance: apiTokenInstance,
    });
  };
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("widToken", data.wid);
      localStorage.setItem("idInstance", idInstance);
      localStorage.setItem("apiTokenInstance", apiTokenInstance);
      navigate("/", { replace: false });
    }

    if (error) {
      setErrors("Не удалось подключиться...");
    }
  }, [isSuccess, error]);
  return (
    <S.Container>
      <S.MeinBox>
        <S.Inputs
          type="text"
          placeholder="IdInstance"
          value={idInstance}
          onChange={(e) => {
            setIdInstance(e.target.value);
            setErrors("");
          }}
        />
        <S.Inputs
          type="text"
          placeholder="ApiTokenInstance"
          value={apiTokenInstance}
          onChange={(e) => {
            setApiTokenInstance(e.target.value);
            setErrors("");
          }}
        />
        <S.ErrorBox>
          <S.ErrorMessage>{errors}</S.ErrorMessage>
        </S.ErrorBox>
        <S.OstiumButton onClick={handleLogin}>Войти</S.OstiumButton>
      </S.MeinBox>
    </S.Container>
  );
}
