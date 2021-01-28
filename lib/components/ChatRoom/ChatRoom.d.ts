import { ReactNode } from "react";
import "./chatroom.scss";
interface IChatRoom {
    sender: "outbound-chat" | "inbound-chat";
    name: string;
    time: string;
    messageText: string;
    prepend?: ReactNode;
    append?: ReactNode;
    img?: string;
    linkText?: boolean;
}
export declare const ChatRoom: ({ name, time, messageText, prepend, append, img, linkText, sender, }: IChatRoom) => JSX.Element;
export default ChatRoom;
//# sourceMappingURL=ChatRoom.d.ts.map