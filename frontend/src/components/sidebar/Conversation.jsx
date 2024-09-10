import useConversation from "../../zustand/useConversation";
import useSearchConversation from "../../zustand/useSearchConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { search, setSearch } = useSearchConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const handleSelectConversation = () => {
    setSelectedConversation(conversation);

    if (search) {
      setSearch("null");
    }
  };

  return (
    <>
      <div
        className={`flex items-center gap-4 pl-4 pr-8 py-2 cursor-pointer group hover:bg-slate-700 ${
          isSelected ? "bg-slate-700" : ""
        }`}
        onClick={handleSelectConversation}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold text-white">
            {conversation.fullName}
          </span>
        </div>
      </div>
    </>
  );
};

export default Conversation;
