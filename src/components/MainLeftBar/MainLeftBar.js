import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTelNumber } from "../../Slices/telNumberSlice";

import * as S from "./styles";

export default function MainLeftBar({titleNumber, titleNumberWidth}) {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.telNumber.number);

  const [phoneNumber, setPhoneNumber] = useState();

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    if (!phoneNumber) {
      alert("Введите номер");
    } else {
      dispatch(setTelNumber(phoneNumber));
      setPhoneNumber("");
    }
  };

  return (
    <>
      <S.Title>
        <S.TitleNumber>{number}</S.TitleNumber>
      </S.Title>

      <S.Title title-number-width={titleNumberWidth}>{titleNumber}</S.Title>
      <S.Form title-number-width={titleNumberWidth}>
        <S.Input
          type="tel"
          placeholder="Телефон"
          value={phoneNumber || ""}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <S.Button type="button" onClick={(evt) => onSubmitForm(evt)}>
          Ok
        </S.Button>
      </S.Form>
      </>
  );
}
