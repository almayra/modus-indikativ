import React, { ReactNode } from "react";
import "./chatroom.scss";
import ChatBottomText from "./ChatBottomText";
import BodyShort from "../Typography/BodyShort";

interface IChatRoom {
  sender: "outbound-chat" | "inbound-chat";
  name: string;
  time: string;
  messageText: string;
  prepend?: ReactNode;
  append?: ReactNode;
  img?: ReactNode;
  linkText?: boolean;
}

export const ChatRoom = ({
  name,
  time,
  messageText,
  prepend,
  append,
  img,
  linkText,
  sender = "inbound-chat",
}: IChatRoom) => {
  return (
    <div className={`chat-room ${sender}`}>
      <div className="bubble">
        {img ? (
          <div className={` ${img ? "with-image" : ""}`}>{img}</div>
        ) : null}
        <div className="text-message">
          {prepend ? <span className="icon prepend">{prepend} </span> : ""}
          <BodyShort className={`text-message ${linkText ? "link" : ""}`}>
            {messageText}
          </BodyShort>
          {append ? <span className="icon append">{append}</span> : ""}
        </div>
      </div>
      <ChatBottomText className="bottom-text">
        {name} • {time}
      </ChatBottomText>
    </div>
  );
};

export default ChatRoom;
