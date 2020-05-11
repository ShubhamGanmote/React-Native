import { combineReducers } from 'redux';
import PollingReducer from './PollingReducer';

export default combineReducers({
	polling: PollingReducer,
});
