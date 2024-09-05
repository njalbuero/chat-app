import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
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

      //socket io functionality here

      await Promise.all([newMessage.save(), conversation.save()]);

      res.status(200).json(newMessage);
    } else {
      res.status(400).json({ error: "Invalid message data" });
    }
  } catch (error) {
    console.log("Error in send message controller", error.message);
    res.status(500).json({
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
      res.status(200).json(conversation.messages);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.log("Error in get messages controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
