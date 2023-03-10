import { createStore,  applyMiddleware } from 'redux';
import rootReducers from './rootReducers';
import createSagaMiddleware ,{ Saga } from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run()