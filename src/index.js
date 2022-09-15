
import http from "http";
import app from "./app";
import { Server as websocketServer } from "socket.io";
import sockets from "./sockets";
const server = http.createServer(app)
const httpServer= server.listen(8080)
const io = new websocketServer(httpServer)

sockets(io)


