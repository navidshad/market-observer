import { Socket } from "socket.io";
import { GetAllCoinResponse } from "./types";

export default (io: Socket) => {

	io.on('market-getAllCoins', async (socket) => {

		let res: GetAllCoinResponse = {
			status: 'pending',
			progressMessage: 'Getting market data',
		}

		io.emit('market-getAllCoins', res);

		setTimeout(() => {
			res = {
				status: 'success',
				progressMessage: 'done'
			}
			
			io.emit('market-getAllCoins', res);
		}, 3000)

	})
}