import { useSocketContext } from "../context/SocketContext";

const useIsUserIsOnline = (id) => {
  const { onlineUsers } = useSocketContext();
  return onlineUsers.includes(id);
};

export default useIsUserIsOnline;
