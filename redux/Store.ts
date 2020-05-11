import { createStore, Middleware, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

const middlewares: Middleware[] = [thunk];

const Store = createStore(RootReducer, applyMiddleware(...middlewares));

export default Store;
