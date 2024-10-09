import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import useSearchUser from "../../zustand/useSearchUser";
import Avatar from "../avatar";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { authUser } = useAuthContext();
  const isSentByUser = conversation.lastMessage?.sender._id === authUser._id;
  console.log(
    typeof conversation.lastMessage?.sender._id,
    typeof authUser._id,
    isSentByUser
  );

  const { search, setSearch } = useSearchUser();

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
        <Avatar user={conversation.recipient} />
        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm font-semibold text-white truncate">
            {conversation.recipient.fullName}
          </span>
          <span className="truncate">
            {`${isSentByUser ? "You: " : ""}${conversation.lastMessage?.message}`}
          </span>
        </div>
      </div>
    </>
  );
};

export default Conversation;
