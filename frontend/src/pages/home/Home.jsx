import Sidebar from "../../components/sidebar/Sidebar";
import ChatPanel from "../../components/chatPanel/ChatPanel";

const Home = () => {
  return (
    <div className="flex gap-4 h-full w-full">
      <Sidebar />
      <ChatPanel />
    </div>
  );
};

export default Home;
