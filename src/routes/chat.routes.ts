import { Router } from "express";
import controller from "../controllers/chat.controller";
import extractJWT from "../middleware/extractJWT";

const router = Router();

router.get("/", extractJWT, controller.getAllChatsHandler);
router.get("/:_id", extractJWT, controller.getChatHandler);
router.post("/", extractJWT, controller.createChatHandler);
router.put("/:_id", extractJWT, controller.updateChatHandler);
router.delete("/:_id", extractJWT, controller.deleteChatHandler);

export default router;
