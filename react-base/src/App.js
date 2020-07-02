import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// O PersistGate vai englobar a nossa aplicação também, dentro do Provider e
// vai receber o persistor como prop

import store, { persistor } from './store';
import history from './services/history';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    // Com a utilização do Router padrão ao invés do BrowserRouter
    // É necessário configurar um history
    // Esse history funciona um pouco como o useHistory do React
    // e para utilizarmos dessa forma, criamos ele com a dependência history
    // Na versão @4.10.1

    // reproduz uma mensagem de sucesso no toastify:
    // toast.success('Oie, sucesso');
    // reproduz uma nensagem de erro no toastify:
    // toast.error('Droga');
    // O provider do react-redux precisa englobar a aplicação
    // e receber o nosso store como prop
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* A partir de agora, os dados do persistor estão salvos no localStorage
        e são resgatados antes da aplicação ser carregada, ou seja,
        o redux-persist espera os states serem carregados do storage
        antes renderizar a aplicação */}
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          {/* autoClose: tanto de tempo para as mensagens fecharem em ms */}
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
