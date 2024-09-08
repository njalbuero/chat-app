const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-4 pl-4 pr-8 py-2 cursor-pointer group hover:bg-slate-700">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold text-white">John Doe</span>
          <p className="truncate text-xs text-gray-400 group-hover:text-gray-200  max-w-64">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quo
            tenetur atque id dolor reiciendis! Quod porro cupiditate aperiam
            ipsa impedit, rem, nisi quisquam odit, dolorem error adipisci neque
            cumque!
          </p>
        </div>
      </div>
    </>
  );
};

export default Conversation;
