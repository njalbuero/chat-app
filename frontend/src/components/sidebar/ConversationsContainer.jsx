import Conversation from "./Conversation";

const ConversationsContainer = () => {
  return (
    <div className="flex flex-1 flex-col overflow-hidden overflow-y-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default ConversationsContainer;
