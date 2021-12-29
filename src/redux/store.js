import { createStore, applyMiddleware } from 'redux';
import rootReducer from './AppReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../services/appAPI";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
sagaMiddleware.run(rootSaga);

export default store;