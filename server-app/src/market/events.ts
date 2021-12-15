import { Socket } from "socket.io";
import { GetAllCoinResponse } from "./types";
import mongoAdapter from "../common/services/mongodb";
import { getAllCoins } from "./collector";

export default (io: Socket) => {

	io.on('market-getAllCoins', async (socket) => {

		let res: GetAllCoinResponse = {
			status: 'faild',
			progressMessage: 'Getting market data',
		}

		io.emit('market-getAllCoins', res);

		// Download new coin list
		let list = await getAllCoins((log) => {
			io.emit('market-getAllCoins', <GetAllCoinResponse>{
				status: 'pending',
				progressMessage: log,
			});
		}).catch(e => {
			io.emit('market-getAllCoins', <GetAllCoinResponse>{
				status: 'faild',
				progressMessage: e,
			});

			return [];
		})

		// Store on database
		mongoAdapter.coins.create(list)
			.then(_ => {
				io.emit('market-getAllCoins', <GetAllCoinResponse>{
					status: 'success',
					progressMessage: 'Coins data updated',
				});
			}).catch(e => {
				io.emit('market-getAllCoins', <GetAllCoinResponse>{
					status: 'faild',
					progressMessage: 'Database error:' + e,
				});
			})
	})
}