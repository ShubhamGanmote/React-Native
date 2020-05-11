import { PollingData, PollingDataAction } from '../../types/types';
import * as types from '../Contants';

const initialState: PollingData = {
	pollingData: [],
};

export default (state = initialState, action: PollingDataAction) => {
	switch (action.type) {
		case types.SET_POLLING_DATA:
			return {
				...state,
				pollingData: [...state.pollingData, ...action.data],
			};
		default:
			return state;
	}
};
