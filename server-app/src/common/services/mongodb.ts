import mongoose, { Model } from 'mongoose';
import { MONGODB_PATH } from '../../config';
import { MarketCoinSchema } from '../../market/schemas';
import { MarketCoin } from '../../market/types';

class MongoAdapter {

	private connection!: mongoose.Connection;
	coins!: Model<MarketCoin>;

	async connect() {
		// mongoose.set('debug', true);
		this.connection = await mongoose.createConnection(MONGODB_PATH);

		// Add shcemas
		this.coins = this.connection.model('coins', MarketCoinSchema);
	}

}

let mongoAdapter = new MongoAdapter();
export default mongoAdapter;