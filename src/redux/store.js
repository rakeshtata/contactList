import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './AppReducer';

export default createStore(rootReducer, applyMiddleware(thunk));