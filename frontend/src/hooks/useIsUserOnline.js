import { useSocketContext } from "../context/SocketContext";

const useIsUserOnline = (id) => {
  const { onlineUsers } = useSocketContext();
  return onlineUsers.includes(id);
};

export default useIsUserOnline;
