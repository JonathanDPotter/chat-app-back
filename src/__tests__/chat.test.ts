import * as ChatService from "../services/chat.service";
import supertest from "supertest";
import createServer from "../utils/createServer";
import { Message } from "../models/chat.model";

const app = createServer();

const chatInput: Message = {
  text: "Hello",
  author: "63adaad517bbb1c2dc885c37",
};

const chatBadInput = {
  text: null,
  author: null,
};

const chatPayload = {
  _id: "63adaad517bbb1c2dc885c37",
  messages: [
    { text: "Hello", author: "63adaad517bbb1c2dc885c37" },
  ] as Message[],
  createdAt: "2022-12-29T14:57:25.786Z",
  updatedAt: "2022-12-29T14:57:25.786Z",
  __v: 0,
};

describe("user", () => {
  describe("chat creation", () => {
    describe("given the text and author are valid", () => {
      it("should return the user payload", async () => {
        const createChatServiceMock = jest
          .spyOn(ChatService, "createChat")
          // @ts-ignore
          .mockReturnValueOnce(chatPayload);

        const { statusCode, body } = await supertest(app)
          .post("/api/chat")
          .set("Authorization", `Bearer testing`)
          .send(chatInput);

        expect(statusCode).toBe(200);
        expect(body).toEqual(chatPayload);
        expect(createChatServiceMock).toHaveBeenCalledWith(chatInput);
      });
    });

    describe("given the chat service throws", () => {
      it("should return a 409 error ", async () => {
        const createChatServiceMock = jest
          .spyOn(ChatService, "createChat")
          .mockRejectedValueOnce("oh no :(");

        const { statusCode } = await supertest(app)
          .post("/api/chat")
          .set("Authorization", `Bearer testing`)
          .send(chatBadInput);

        expect(statusCode).toBe(409);
        expect(createChatServiceMock).toHaveBeenCalled();
      });
    });
  });
});
