import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
// call -> Chamar uma função que quisermos, normalmente assíncrona
// put -> Da dispatch numa action de sucesso ou falha para o Reducer
// takeLatest -> Pega somente a última chamadaa realizada em determinada chamada
// Ex: Usuário clica no botão de Enviar 300x, o Sagas só vai pegar a ÚLTIMA chamada desse botão
// all -> permite colocar mais de uma ação para ser escutada
const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

// O Saga usa as funções geradoras para realizar as requisições com call
function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch (err) {
    toast.error('Deu erro');
    yield put(actions.clicaBotaoFailure());
  }
}

// Exportamos a ação que escutaremos no types em um array pois podemos escutar mais de uma ação com o all
// Podemos separar nesse caso pelo takeLatest cada uma das ações, recebendo como parâmetros a
// Ação que vamos escutar e a função que executaremos quando aquela ação for chamada
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
