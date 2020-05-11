import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import HomeScreen from '../screens/HomeScreen';

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn(),
		route: jest.fn(),
	},
});

describe('Home Screen', () => {
	describe('rendering', () => {
		const props = createTestProps();
		const wrapper = shallow(
			<Provider store={store}>
				<HomeScreen {...props} />
			</Provider>
		);

		it('should render a view', () => {
			expect(wrapper.find('.home-screen')).toHaveLength(0);
		});
	});
});
