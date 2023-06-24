import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setMessages } from "../../Slices/messageSlice";
import { useSendMessageMutation } from "../../services/api";
import { useGetMessageQuery } from "../../services/api";
import { useDelMessageMutation } from "../../services/api";
import Message from "../../components/Message/Message";
import MainLeftBar from "../../components/MainLeftBar/MainLeftBar";
import * as S from "./styles";

export default function MainPage() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.telNumber.number);
  const messageCollection = useSelector((state) => state.message.message);
  const chatId = `${number}@c.us`;
  const idInstance = localStorage.getItem("idInstance");
  const apiTokenInstance = localStorage.getItem("apiTokenInstance");
  const [message, setMessage] = useState("");

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 780;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const { data } = useGetMessageQuery(
    {
      idInstance: idInstance,
      apiTokenInstance: apiTokenInstance,
    },
    {
      pollingInterval: 5000,
    }
  );

  const [delMessageTrigger] = useDelMessageMutation();

  useEffect(() => {
    if (data?.receiptId && chatId) {
      if (data.body?.senderData.chatId === chatId) {
        dispatch(
          setMessages({
            message: data.body?.messageData.textMessageData.textMessage,
            type: "recieve",
          })
        );
      }
      delMessageTrigger({
        idInstance: idInstance,
        apiTokenInstance: apiTokenInstance,
        receiptId: data.receiptId,
      });
    }
  }, [data?.receiptId, chatId]);

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const handleLogin = () => {
    sendMessageTrigger({
      idInstance: idInstance,
      apiTokenInstance: apiTokenInstance,
      chatId: chatId,
      message: message,
    });
    setMessage("");
    dispatch(setMessages({ message: message, type: "send" }));
  };
  const [sendMessageTrigger] = useSendMessageMutation();

  if (width < breakpoint) {
    return (
      <S.Wrapper>
        <S.Container>
          <S.MainMobile>
            <S.MainTopNav>
              <MainLeftBar titleNumber={""} titleNumberWidth={"30%"} />
            </S.MainTopNav>
            <S.CenterBlock>
              <S.MessagesBlock>
                {messageCollection?.map((elem) => (
                  <Message
                    identify={elem.type}
                    key={Math.floor(Math.random() * 999)}
                    message={elem.message}
                  />
                ))}
              </S.MessagesBlock>
              <S.Form>
                <S.SendText
                  type="text"
                  placeholder="Введите сообщение"
                  value={message || ""}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
                <S.Button onClick={handleLogin}>Отправить</S.Button>
              </S.Form>
            </S.CenterBlock>
          </S.MainMobile>
        </S.Container>
      </S.Wrapper>
    );
  }
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <S.MainNav>
            <MainLeftBar
              titleNumber={"Введите номер телефона:"}
              titleNumberWidth={"90%"}
            />
          </S.MainNav>
          <S.CenterBlock>
            <S.MessagesBlock>
              {messageCollection?.map((elem) => (
                <Message
                  identify={elem.type}
                  key={Math.floor(Math.random() * 999)}
                  message={elem.message}
                />
              ))}
            </S.MessagesBlock>
            <S.Form>
              <S.SendText
                type="text"
                placeholder="Введите сообщение"
                value={message || ""}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
              <S.Button onClick={handleLogin}>Отправить</S.Button>
            </S.Form>
          </S.CenterBlock>
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
}
