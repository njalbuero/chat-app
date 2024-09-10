import Logout from "./Logout";
import { useAuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 mt-auto flex items-center justify-between">
      <Logout />
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={authUser.profilePic} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
