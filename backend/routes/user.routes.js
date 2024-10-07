import express from "express";
import {
  getConversations,
  searchUsers,
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id/conversations", protectRoute, getConversations);
router.get("/search", searchUsers);

export default router;
