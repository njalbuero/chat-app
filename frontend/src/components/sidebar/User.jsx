import useConversation from "../../zustand/useConversation";
import useSearchUser from "../../zustand/useSearchUser";
import Avatar from "../avatar";

const User = ({ user, conversations }) => {
  const { setSearch, setNewConversationUser } = useSearchUser();
  const { setSelectedConversation } = useConversation();

  const handleSelect = () => {
    const existingConversation = conversations.find(
      (conversation) => conversation.recipient._id === user._id
    );

    if (existingConversation) {
      setSelectedConversation(existingConversation);
    } else {
      setNewConversationUser(user);
      setSelectedConversation({ recipient: user });
    }

    setSearch("");
  };

  return (
    <>
      <div
        className="flex items-center gap-4 pl-4 pr-8 py-2 cursor-pointer group hover:bg-slate-700"
        onClick={handleSelect}
      >
        <Avatar user={user} />
        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm font-semibold text-white truncate">
            {user.fullName}
          </span>
        </div>
      </div>
    </>
  );
};

export default User;
