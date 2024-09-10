import SearchInput from "./SearchInput";
import ConversationsContainer from "./ConversationsContainer";
import Logo from "../Logo";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="flex flex-col rounded-lg bg-[#2a323c] w-96">
      <div className="flex justify-center pt-4">
        <Logo />
      </div>
      <SearchInput />
      <ConversationsContainer />
      <Footer />
    </div>
  );
};

export default Sidebar;
