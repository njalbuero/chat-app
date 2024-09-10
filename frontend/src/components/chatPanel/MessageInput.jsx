import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() === "") return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className={`absolute inset-y-0 end-0 flex items-center pe-3 ${
            message ? "block" : "hidden"
          }`}
          disabled={!message}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
