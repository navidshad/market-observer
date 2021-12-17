import { Socket } from "socket.io";
import { GetAllCoinResponse } from "./types";
import mongoAdapter from "../common/services/mongodb";
import { getAllCoins } from "./collector";

export default (io: Socket) => {

	io.on("market-getbyfilter", (query: object) => {
		mongoAdapter.coins.find(query).exec()
			.then(docs => {
				let coins = docs.map(doc => doc.toObject())
				io.emit("market-getbyfilter", coins);
			})
	})

	io.on('market-getAllCoins', async () => {

		io.emit('market-getAllCoins', <GetAllCoinResponse>{
			status: 'pending',
			progressMessage: 'Getting new data',
		});

		// Download new coin list
		await getAllCoins((log) => {
			io.emit('market-getAllCoins', <GetAllCoinResponse>{
				status: 'pending',
				progressMessage: log,
			});
		})
			.then(_ => {
				io.emit('market-getAllCoins', <GetAllCoinResponse>{
					status: 'success',
					progressMessage: 'Coins data updated',
				});
			})
			.catch(e => {
				io.emit('market-getAllCoins', <GetAllCoinResponse>{
					status: 'faild',
					progressMessage: e,
				});

				return [];
			})
	})
}