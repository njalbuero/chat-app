import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessagesContainer from "./MessagesContainer";
import useConversation from "../../zustand/useConversation";
import NoChatSelected from "./NoChatSelected";
import { useEffect } from "react";

const ChatPanel = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-1 flex-col rounded-lg bg-[#2a323c]">
      {selectedConversation ? (
        <>
          <ChatHeader />
          <MessagesContainer />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

export default ChatPanel;
