import { Request, Response } from "express";
import {
  createChat,
  getAllChats,
  getChat,
  updateChat,
  deleteChat,
} from "../services/chat.service";
import { CreateChatInput } from "../schemas/chat.schema";

const createChatHandler = async (
  req: Request<{}, {}, CreateChatInput["body"]>,
  res: Response
) => {
  try {
    const chat = await createChat(req.body);
    return res.json(chat);
  } catch (error: any) {
    console.log(error.message);
    return res.status(409).send(error.message);
  }
};

const getAllChatsHandler = async (_req: Request, res: Response) => {
  try {
    const chats = await getAllChats();
    return res.json({message: "hello"});
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const getChatHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const chat = await getChat(_id);
    return res.json(chat);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const updateChatHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { update } = req.body;
  try {
    const chat = await updateChat(_id, update);
    return res.json(chat);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

const deleteChatHandler = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const chat = await deleteChat(_id);
    return res.json(`Successfully deleted chat ${chat?._id}`);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

const controller = {
  createChatHandler,
  getAllChatsHandler,
  getChatHandler,
  updateChatHandler,
  deleteChatHandler,
};

export default controller;
