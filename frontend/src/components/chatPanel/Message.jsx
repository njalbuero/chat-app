import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import moment from "moment";
import Avatar from "../avatar";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const isSentByUser = message.senderId === selectedConversation.recipient._id;
  const user = isSentByUser ? selectedConversation.recipient : authUser;
  const bubbleColor = isSentByUser ? "bg-slate-600" : "bg-primary";
  const time = moment(message.createdAt).format("h:mm A");

  return (
    <>
      <div className={`chat ${isSentByUser ? "chat-start" : "chat-end"}`}>
        <Avatar user={user} width="w-10" chatBubble={true} />
        <div className="chat-header">{user.fullName}</div>
        <div className={`text-white chat-bubble ${bubbleColor}`}>
          {message.message}
        </div>
        <div className="chat-footer">
          <time className="text-xs opacity-50">{time}</time>
        </div>
      </div>
    </>
  );
};

export default Message;
