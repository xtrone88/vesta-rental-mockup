import mock from '../mock';
import { sampleBids } from '../../data/bids'

mock
	.onGet('/api/bidding/get')
	.reply(() => {
		return [200, sampleBids];
	});