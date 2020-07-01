// Todas as sagas podem vir nesse arquivo
import { all } from 'redux-saga/effects';
// O all vai ser usado nesse caso para combinar todas as sagas criadas
import example from './example/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
