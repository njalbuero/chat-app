import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";

export const getConversations = async (req, res) => {
  try {
    const userId = req.params.id;

    let conversations = await Conversation.find({
      participants: userId,
    })
      .populate({
        path: "messages",
        perDocumentLimit: 1,
        populate: { path: "senderId" },
      })
      .populate({ path: "participants", match: { _id: { $ne: userId } } })

    if (!conversations || conversations.length === 0) {
      return res.status(200).json([]);
    }

    conversations = conversations.map((conversation) => {
      // Ensure there is at least one message
      const lastMessage = conversation.messages[0];

      return {
        _id: conversation._id,
        recipient: conversation.participants[0], // the user they are conversing with
        lastMessage: lastMessage
          ? {
              message: lastMessage.message,
              sender: lastMessage.senderId,
              createdAt: lastMessage.createdAt,
            }
          : null, // Handle the case where there are no messages
      };
    });

    // Sort by lastMessage.createdAt (latest first)
    conversations.sort((a, b) => {
      if (a.lastMessage && b.lastMessage) {
        return (
          new Date(b.lastMessage.createdAt) - new Date(a.lastMessage.createdAt)
        );
      }
      return 0; // Handle cases where there are no messages
    });

    return res.status(200).json(conversations);
  } catch (error) {
    console.log("Error in get conversations controller", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const searchUsers = async (req, res) => {
  try {
    const { name } = req.query;
    const users = await User.find({
      fullName: { $regex: name, $options: "i" },
    }).sort({ fullName: 1 });
    return res.status(200).json(users);
  } catch (error) {
    console.log("Error in search users controller", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
