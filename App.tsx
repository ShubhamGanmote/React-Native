import React from 'react';
import Navigation from './navigations/Navigations';

import { Provider } from 'react-redux';
import Store from './redux/Store';

export default function App() {
	return (
		<Provider store={Store}>
			<Navigation />
		</Provider>
	);
}
