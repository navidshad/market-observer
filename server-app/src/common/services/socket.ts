import { Server, Socket } from "socket.io";

class IoServer {

	private io!: Server;

	get server() {
		return this.io;
	}

	on(event: string, handler: (socket: Socket) => void) {
		this.server.on(event, handler);
	}

	setNewServer(server: Server) {
		this.io = server
	}
}

let ioServer = new IoServer();

export default ioServer;