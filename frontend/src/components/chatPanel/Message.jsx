import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import moment from "moment";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const isSentByUser = message.senderId === selectedConversation._id;
  const user = isSentByUser
    ? selectedConversation
    : authUser;
  const bubbleColor = isSentByUser ? "bg-slate-600" : "bg-primary";
  const time = moment(message.createdAt).format("h:mm A");

  return (
    <>
      <div className={`chat ${isSentByUser ? "chat-start" : "chat-end"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={user.profilePic} />
          </div>
        </div>
        <div className="chat-header">{user.fullName}</div>
        <div className={`text-white chat-bubble ${bubbleColor}`}>{message.message}</div>
        <div className="chat-footer">
          <time className="text-xs opacity-50">{time}</time>
        </div>
      </div>
    </>
  );
};

export default Message;
