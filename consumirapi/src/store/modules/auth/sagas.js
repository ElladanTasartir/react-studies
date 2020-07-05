import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    // Aqui pedimos para o sagas realizar essa chamada no axios, passando ele como callback
    // e os argumentos dele como args do call, ou seja, primeiro o callback e depois os argumentos dele
    const response = yield call(axios.post, '/tokens', payload);

    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login');

    // Colocamos o token no cabeçalho da requisição, no caso, de todas
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (err) {
    toast.error('Usuário ou senha inválidos');

    yield put(actions.loginFailure());
  }
}
// Já que não usamos o yield nessa, não precisamos que esta seja uma função geradora
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  console.log('to be continued...');
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
