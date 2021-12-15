import { Server, Socket } from "socket.io";

// Modules events
import marketSocketHandler from '../../market/events';

class SockerAdapter {

	private io?: Server;

	get server() {
		return this.io;
	}

	on(event: string, handler: (socket: Socket) => void) {
		this.server!.on(event, handler);
	}

	createSocketServer(httpServer: any) {
		this.io = new Server(httpServer, {
			cors: {
				origin: "*",
				methods: ["GET", "POST"]
			}
		});

		this.io.on("connection", (socket: Socket) => {
			console.log('Someone connected');
			marketSocketHandler(socket);
		});
	}
}

let sockeradApter = new SockerAdapter();
export default sockeradApter;