import { createStore as createStoreRedux, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


const store = createStoreRedux(reducer, applyMiddleware(thunk));

export const createStore = () => {
    return store;
}