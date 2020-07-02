import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// envolvemos o nosso root reducer com o persistedReducers, para falar que queremos persistir ele
import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
// Recebe um reducer

// Vai criar um middleware Saga
const sagaMiddleware = createSagaMiddleware();

// E aqui aplicar esse middleware na store
const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

// O nosso middleware irá rodar o rootSaga criado
sagaMiddleware.run(rootSaga);

// Necessário exportar o nossos persistor com a store dentro para fora
export const persistor = persistStore(store);
export default store;
