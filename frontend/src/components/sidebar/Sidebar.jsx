import SearchInput from "./SearchInput";
import ConversationsContainer from "./ConversationsContainer";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div className="flex flex-col rounded-lg bg-[#2a323c] max-w-96">
      <SearchInput />
      <ConversationsContainer />
      <Logout />
    </div>
  );
};

export default Sidebar;
