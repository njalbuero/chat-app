import useConversation from "../../zustand/useConversation";

const ChatHeader = () => {
  const {selectedConversation} = useConversation();

  return (
    <div className="shadow-xl">
      <div className="flex items-center gap-4 p-4">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={selectedConversation.profilePic} />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold text-white">{selectedConversation.fullName}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
