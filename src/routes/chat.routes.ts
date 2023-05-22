import { Router } from "express";
import controller from "../controllers/chat.controller";
import extractJWT from "../middleware/extractJWT";

const router = Router();

router.get("/", controller.getAllChatsHandler);
router.get("/:_id", controller.getChatHandler);
router.put("/:_id", extractJWT, controller.updateChatHandler);
router.delete("/:_id", extractJWT, controller.deleteChatHandler);

export default router;
