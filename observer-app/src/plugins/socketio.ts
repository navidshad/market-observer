import { SERVER_ADDRESS } from "@/config/links";
import { io } from "socket.io-client";

const socket = io(SERVER_ADDRESS);

export default {
	socket
}