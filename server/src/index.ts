import express from "express";
import { createServer } from "http";
import { Server } from "ws";
import router from "./routers/router";
import cors from "cors";
import { configDotenv } from "dotenv";

const app = express();
const server = createServer(app);
const wss = new Server({ server });

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));
configDotenv();

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });
  ws.send("welcome to the websocket server");
});

server.listen(4001, () => {
  console.log("🚀 http://localhost:4001");
});
