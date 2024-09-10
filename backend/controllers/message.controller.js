import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const { message } = req.body;
    const senderId = req.user._id;

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });

      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }

      conversation.messages.push(newMessage._id);

      await Promise.all([newMessage.save(), conversation.save()]);

      const receiverSocketId = getReceiverSocketId(receiverId);
      if (receiverSocketId) {
        // io.to(<socket_id>).emit() used to send events to specific client
        io.to(receiverSocketId).emit("newMessage", newMessage);
      }

      return res.status(200).json(newMessage);
    } else {
      return res.status(400).json({ error: "Invalid message data" });
    }
  } catch (error) {
    console.log("Error in send message controller", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (conversation) {
      return res.status(200).json(conversation.messages);
    } else {
      return res.status(200).json([]);
    }
  } catch (error) {
    console.log("Error in get messages controller", error.message);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
