import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessagesContainer from "./MessagesContainer";

const ChatPanel = () => {
  return (
    <div className="flex flex-1 flex-col rounded-lg bg-[#2a323c]">
      <ChatHeader />
      <MessagesContainer />
      <MessageInput />
    </div>
  );
};

export default ChatPanel;
