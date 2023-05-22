import { object, string, TypeOf } from "zod";

export const createChatSchema = object({
  body: object({
    author: string({
      required_error: "Author is required",
    }),
    text: string({
      required_error: "Message is required",
    }),
  }),
});

export type CreateChatInput = TypeOf<typeof createChatSchema>;

