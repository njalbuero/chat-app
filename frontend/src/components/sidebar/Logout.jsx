import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
  const { loading, logout } = useLogout();

  return (
    <button>
      {!loading ? (
        <RiLogoutBoxLine className="h-8 w-8" onClick={logout}/>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </button>
  );
};

export default Logout;
