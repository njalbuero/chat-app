import express from "express";
import { getConversations } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id/conversations", protectRoute, getConversations);

export default router;
