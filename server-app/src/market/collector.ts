import Coingecko from 'coingecko-api';
import { get } from '../common/http';

import mongoAdapter from '../common/services/mongodb';
import { MarketCoin } from './types';

let client = new Coingecko();

export const getTotalCoins = () => {
	return get('https://api.coingecko.com/api/v3/global')
		.then(body => {
			return body.data['active_cryptocurrencies'] as number;
		}).catch(e => {
			return 0;
		})
}

let gettiCoins = false;
export const getAllCoins = async (onProgress: (log: string) => void) => {

	if (gettiCoins) return;

	gettiCoins = true;

	let totalCoins = await getTotalCoins();
	let perPage = 250;
	let totalPages = Math.ceil(totalCoins / perPage);

	await mongoAdapter.coins.deleteMany({});

	for (let page = 0; page < totalPages; page++) {

		onProgress(`Getting coins data ${page * perPage}/${totalCoins}`,)

		let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`;
		await get(url)
			.then(body => {

				let coins = body as Array<MarketCoin>;
				mongoAdapter.coins.create(coins);

			}).catch(e => {
				gettiCoins = false;
				throw `Error on getting coins ${page}/${totalPages}: ${e}`
			})
	}

	gettiCoins = false;
}