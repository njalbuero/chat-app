import useIsUserIsOnline from "../hooks/useIsUserIsOnline";

const Avatar = ({ user, width = "w-12", chatBubble = false }) => {
  const isOnline = useIsUserIsOnline(user._id);

  return (
    <div className={`avatar ${isOnline ? "online" : ""} ${chatBubble ? "chat-image" : ""}`}>
      <div className={`${width} rounded-full`}>
        <img src={user.profilePic} />
      </div>
    </div>
  );
};

export default Avatar;
