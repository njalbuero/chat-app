const ChatHeader = () => {
  return (
    <div className="shadow-xl">
      <div className="flex items-center gap-4 p-4">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold text-white">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
