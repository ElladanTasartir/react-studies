import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
// Recebe um reducer

// Vai criar um middleware Saga
const sagaMiddleware = createSagaMiddleware();

// E aqui aplicar esse middleware na store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// O nosso middleware irá rodar o rootSaga criado
sagaMiddleware.run(rootSaga);

export default store;
