import { WebSocketServer } from "ws";
import { v4 as uuidv4 } from "uuid";

import { GlobalController } from "./controllers/global.controller.js";

const port = 8080;
export const wss = new WebSocketServer({ port });

const globalController = new GlobalController();

wss.on("connection", (c) => {
  Object.assign(c, { id: uuidv4(), username: "Anonymous" });

  c.send(
    JSON.stringify({
      type: "connected",
    })
  );

  c.on("message", (msg) => {
    msg = JSON.parse(msg);

    if (msg.type === "setUsername") {
      Object.assign(c, { username: msg.data.username });
      c.send(
        JSON.stringify({
          type: "userConnected",
          data: { username: c.username, id: c.id },
        })
      );
      return;
    }

    console.log(`CLIENT: ${c.username}`);
    globalController.redirect(c, msg);
  });
});
