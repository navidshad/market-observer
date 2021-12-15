import Coingecko from 'coingecko-api';
import { MarketCoin } from './types';

let client = new Coingecko();

export const getTotalCoins = () => {
	return client.global().then(res => {
		if (res.code == 200)
			return res.data['active_cryptocurrencies'] as number;
		else return 0;
	})
}

export const getAllCoins = async (onProgress: (log: string) => void) => {
	let totalCoins = await getTotalCoins();
	let totalPages = Math.ceil(totalCoins / 250);

	let list: Array<MarketCoin> = [];

	for (let page = 0; page < totalPages; page++) {

		onProgress(`Getting coins ${page}/${totalPages}`,)

		await client.coins.all({
			page,
			per_page: 250,
		}).then(res => {

			if (res.code != 200) {
				throw `Error on getting coins ${page}/${totalPages}: ${res.data}`				
			} else {
				let pageContent = JSON.parse(res.data) as Array<MarketCoin>;
				list.concat(pageContent);
			}

		});

	}

	return list;
}