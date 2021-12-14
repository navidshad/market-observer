import { createServer } from "http";
import { Server, Socket } from "socket.io";
import ioServer from "./common/services/socket";

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket: Socket) => {
	console.log('Someone connected');
});

ioServer.setNewServer(io);

// import handlers
import './market/event_handlers';

httpServer.listen(3000, () => {
	console.log('Server is live');
});
