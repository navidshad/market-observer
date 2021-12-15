import { createServer } from "http";
import mongoAdapter from "./common/services/mongodb";
import socketAdapter from "./common/services/socket";

const httpServer = createServer();

mongoAdapter.connect();
socketAdapter.createSocketServer(httpServer);

httpServer.listen(3000, () => {
	console.log('Server is live on port 3000');
});
