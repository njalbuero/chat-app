import Logout from "./Logout";
import { useAuthContext } from "../../context/AuthContext";
import Avatar from "../avatar";

const Footer = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 mt-auto flex items-center justify-between">
      <Logout />
      <Avatar user={authUser} />
    </div>
  );
};

export default Footer;
