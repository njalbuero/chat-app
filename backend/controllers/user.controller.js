import Conversation from "../models/conversation.model.js";
import mongoose from "mongoose";

export const getConversations = async (req, res) => {
  try {
    const userId = req.params.userId;

    const conversations = await Conversation.aggregate([
      {
        $match: {
          participants: mongoose.Types.ObjectId(userId), // Match the userId in participants array
        },
      },
      {
        $lookup: {
          from: "messages", // The name of your messages collection
          localField: "messages",
          foreignField: "_id",
          as: "messagesDetails",
        },
      },
      {
        $project: {
          participants: 1,
          messages: 1,
          lastMessage: { $arrayElemAt: ["$messagesDetails", -1] }, // Get the last message document
        },
      },
    ]);

    if (!conversations || conversations.length === 0) {
      return res.status(404).json({ message: "No conversations found" });
    }

    res.json(conversations);

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in get conversations controller", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
