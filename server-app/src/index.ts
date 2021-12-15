import { createServer } from "http";
import { Server, Socket } from "socket.io";
import ioServer from "./common/services/socket";
import marketSocketHandler from './market/event_handlers';

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket: Socket) => {
	console.log('Someone connected');

	marketSocketHandler(socket);
});



ioServer.setNewServer(io);

httpServer.listen(3000, () => {
	console.log('Server is live');
});
