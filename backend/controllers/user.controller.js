import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const userId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: userId },
    }).select("-password");

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in get users for sidebar controller", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
