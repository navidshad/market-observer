import mongoose, { mongo, Schema } from 'mongoose';
import { MarketCoin } from '../../market/types';

class MongoAdapter {

	coins = mongoose.model('coins', new Schema<MarketCoin>({}))

	async connect() {
		return mongoose.connect(MONGODB_PATH);
	}

}

let mongoAdapter = new MongoAdapter();
export default mongoAdapter;