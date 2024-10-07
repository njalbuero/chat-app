import useConversation from "../../zustand/useConversation";
import Avatar from "../avatar";

const ChatHeader = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="shadow-xl">
      <div className="flex items-center gap-4 p-4">
        <Avatar user={selectedConversation.recipient} />
        <div>
          <span className="text-sm font-semibold text-white">
            {selectedConversation.fullName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
