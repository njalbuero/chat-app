import useGetConversations from "../../hooks/useGetConversations";
import useSearchUsersFetch from "../../hooks/useSearchUsersFetch";
import useSearchUser from "../../zustand/useSearchUser";
import ConversationSkeleton from "../skeletons/ConversationSkeleton";
import Conversation from "./Conversation";
import NewConversation from "./NewConversation";
import User from "./User";

const ConversationsContainer = () => {
  const { loading: conversationsLoading, conversations } =
    useGetConversations();
  const { search, newConversationUser } = useSearchUser();
  const { loading: searchLoading, searchedUsers } = useSearchUsersFetch();

  return (
    <div className="flex flex-1 flex-col overflow-hidden overflow-y-auto">
      {search &&
        !searchLoading &&
        searchedUsers.map((user) => (
          <User key={user._id} user={user} conversations={conversations} />
        ))}

      {search && searchLoading && (
        <div className="flex flex-col gap-3 p-4">
          <ConversationSkeleton />
          <ConversationSkeleton />
          <ConversationSkeleton />
        </div>
      )}

      {!search && conversationsLoading && (
        <div className="flex flex-col gap-3 p-4">
          <ConversationSkeleton />
          <ConversationSkeleton />
          <ConversationSkeleton />
        </div>
      )}

      {!search && conversations && (
        <>
          {newConversationUser && (
            <NewConversation user={newConversationUser} />
          )}
          {conversations.map((conversation) => (
            <Conversation key={conversation._id} conversation={conversation} />
          ))}
        </>
      )}
    </div>
  );
};

export default ConversationsContainer;
