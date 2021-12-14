import { createServer } from "http";
import { Server, Socket } from "socket.io";
import ioServer from "./common/services/socket";

const httpServer = createServer();
const io = new Server(httpServer, {});

io.on("connection", (socket: Socket) => { });
ioServer.setNewServer(io);

// import handlers
import './market/event_handlers';

httpServer.listen(3000, () => {
	console.log('Server is live');
});
