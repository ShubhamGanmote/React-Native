import http from '../../utils/http';
import { Dispatch } from 'redux';
import * as types from '../Contants';

const getPollingData = (page: number) => (dispatch: Dispatch) => {
	http
		.get(`search_by_date?tags=story&page=${page}`)
		.then((res) => {
			dispatch({ type: types.SET_POLLING_DATA, data: res.data.hits });
		})
		.catch((err) => {
			alert('Unable to fetch the polling data');
		});
};

const resetData = () => (dispatch: Dispatch) => {
	dispatch({ type: types.RESET_POLLING_DATA });
};

export { getPollingData, resetData };
