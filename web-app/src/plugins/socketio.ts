import { SERVER_ADDRESS } from "@/config/links";
import { io as IO, Socket } from "socket.io-client";

class SocketController {

	private static instance: SocketController;

	static getInstance() {
		if (!this.instance) {
			this.instance = new SocketController()
			return this.instance;
		}
		else return this.instance;
	}

	io!: Socket;

	install() {
		this.io = IO(SERVER_ADDRESS);
	}
}

export default SocketController.getInstance();