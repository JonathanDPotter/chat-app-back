import ChatModel, { ChatDocument, Message } from "../models/chat.model";

export const createChat = async (input: Message) => {
  try {
    const chat = await ChatModel.create(input);
    return chat;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllChats = async () => {
  try {
    const chats = await ChatModel.find();
    return chats;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getChat = async (_id: string) => {
  try {
    const chat = await ChatModel.findById(_id);
    return chat;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateChat = async (_id: string, update: ChatDocument) => {
  try {
    const chat = await ChatModel.findByIdAndUpdate(_id, update);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteChat = async (_id: string) => {
  try {
    const chat = await ChatModel.findByIdAndDelete(_id);
    return chat;
  } catch (error: any) {
    throw new Error(error);
  }
};
