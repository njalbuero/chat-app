import { RiLogoutBoxLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className="p-4 mt-auto flex items-center">
      <button>
        <RiLogoutBoxLine className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Logout;
