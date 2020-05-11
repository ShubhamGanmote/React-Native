import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import DetailsScreen from '../screens/DetailsScreen';

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn(),
	},
	route: {
		params: {
			itemDetails: {},
		},
	},
});

describe('Details Screen', () => {
	describe('rendering', () => {
		const props = createTestProps();
		const wrapper = shallow(
			<Provider store={store}>
				<DetailsScreen {...props} />
			</Provider>
		);

		it('should render a view', () => {
			expect(wrapper.find('.details-screen')).toHaveLength(0);
		});
	});
});
