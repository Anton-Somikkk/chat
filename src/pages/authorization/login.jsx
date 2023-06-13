import { useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppRoutes from "../../routs/routs";

import { useGetTokenQuery } from "../../services/api";
import * as S from "./style.jsx";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const { data, isSuccess, isLoading } = useGetTokenQuery({
    idInstance: idInstance,
    apiTokenInstance: apiTokenInstance,
  });

  const handleLogin = () => {
    if (isSuccess) {
      localStorage.setItem("widToken", data.wid);
      localStorage.setItem("idInstance", idInstance);
      localStorage.setItem("apiTokenInstance", apiTokenInstance);

      console.log("1", !!localStorage.getItem("widToken"));
    }
    navigate("/", { replace: false });
  };
  

  return (
    <S.Container>
      <S.MeinBox>
        <S.Inputs
          type="text"
          placeholder="IdInstance"
          value={idInstance}
          onChange={(e) => {
            setIdInstance(e.target.value);
          }}
        />
        <S.Inputs
          type="text"
          placeholder="ApiTokenInstance"
          value={apiTokenInstance}
          onChange={(e) => {
            setApiTokenInstance(e.target.value);
          }}
        />
        <S.ErrorBox>
          <S.ErrorMessage></S.ErrorMessage>
        </S.ErrorBox>
        <S.OstiumButton onClick={handleLogin}>Войти</S.OstiumButton>
      </S.MeinBox>
    </S.Container>
  );
}
export default Login;
