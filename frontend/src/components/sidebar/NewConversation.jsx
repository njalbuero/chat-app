import useConversation from "../../zustand/useConversation";
import Avatar from "../avatar";

const NewConversation = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?.recipient._id === user._id;

  return (
    <>
      <div
        className={`flex items-center gap-4 pl-4 pr-8 py-2 cursor-pointer group hover:bg-slate-700 ${
          isSelected ? "bg-slate-700" : ""
        }`}
        onClick={() => setSelectedConversation(user)}
      >
        <Avatar user={user} />
        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm font-semibold text-white truncate">
            New message to {user.fullName}
          </span>
        </div>
      </div>
    </>
  );
};

export default NewConversation;
