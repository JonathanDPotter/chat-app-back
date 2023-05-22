import { Schema, model, Document } from "mongoose";

export interface Message {
  author: string;
  text: string;
}

export interface ChatDocument extends Document {
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
});

const chatSchema = new Schema(
  {
    messages: { type: [messageSchema], required: true, default: [] },
  },
  {
    timestamps: true,
  }
);

const ChatModel = model<ChatDocument>("Chat", chatSchema);

export default ChatModel;
