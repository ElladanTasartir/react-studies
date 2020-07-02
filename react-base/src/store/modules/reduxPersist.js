import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      // Nome da aplicação
      key: 'REACT-BASE',
      // O storage que iremos salvar
      storage,
      // Os dados que queremos persistir na aplicação
      // Aqui a gente sabe quais são os dados pela chave que colocamos no state do rootReducer
      // Nesse caso, example
      whitelist: ['example'],
    },
    reducers
  );

  return persistedReducers;
};
