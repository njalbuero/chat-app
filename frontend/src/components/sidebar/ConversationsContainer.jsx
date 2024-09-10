import useGetConversations from "../../hooks/useGetConversations";
import useSearchConversation from "../../zustand/useSearchConversation";
import ConversationSkeleton from "../skeletons/ConversationSkeleton";
import Conversation from "./Conversation";

const ConversationsContainer = () => {
  const { loading, conversations } = useGetConversations();
  const { search } = useSearchConversation();
  const conversationsToRender = search
    ? conversations.filter((conversation) =>
        conversation.fullName.toLowerCase().includes(search.toLowerCase())
      )
    : conversations;

  return (
    <div className="flex flex-1 flex-col overflow-hidden overflow-y-auto">
      {loading && (
        <div className="flex flex-col gap-3 p-4">
          <ConversationSkeleton />
          <ConversationSkeleton />
          <ConversationSkeleton />
        </div>
      )}

      {conversationsToRender &&
        conversationsToRender.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}
    </div>
  );
};

export default ConversationsContainer;
