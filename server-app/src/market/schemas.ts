import { Schema } from "mongoose";
import { MarketCoin } from "./types";

export const MarketCoinSchema = new Schema<MarketCoin>({
	id: String,
	symbol: String,
	name: String,
	image: String,
	current_price: Number,
	market_cap: Number,
	market_cap_rank: Number,
	fully_diluted_valuation: Number,
	total_volume: Number,
	high_24h: Number,
	low_24h: Number,
	price_change_24h: Number,
	price_change_percentage_24h: Number,
	market_cap_change_24h: Number,
	market_cap_change_percentage_24h: Number,
	circulating_supply: Number,
	total_supply: Number,
	max_supply: Number,
	ath: Number,
	ath_change_percentage: Number,
	ath_date: String,
	atl: Number,
	atl_change_percentage: Number,
	atl_date: String,
	roi: Object,
	last_updated: String
})