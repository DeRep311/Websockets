import express from "express";
import { Server as HTTPServer } from 'http';
import path from 'path';
import Faker from 'faker';
import { Server as websocketServer } from "socket.io";
import sockets from "./sockets";
import { router } from "./routes";
Faker.locale = 'es';
const PORT = process.env.PORT || 8080;
const { commerce, image } = Faker;
const port = 8090;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', PORT);
app.use('/api', router);
const http = new HTTPServer(app);
const io = new websocketServer(http);

sockets(io);

export {
    app,
    http
};