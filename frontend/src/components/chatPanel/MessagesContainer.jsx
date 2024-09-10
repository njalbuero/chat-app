import useGetMessages from "../../hooks/useGetMessages.js";
import Message from "./Message.jsx";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const MessagesContainer = () => {
  const { loading, messages } = useGetMessages();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!loading && messages.length > 0) {
      scrollToBottom();
    }
  }, [loading, messages]);

  useListenMessages();

  return (
    <div className="flex-1 flex flex-col overflow-auto p-4 ">
      {loading && (
        <div className="flex justify-center">
          <div className="loading loading-spinner"></div>
        </div>
      )}

      {!loading && messages.length === 0 && (
        <div className="text-center mt-auto">
          Start the conversation by sending a message.{" "}
        </div>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessagesContainer;
