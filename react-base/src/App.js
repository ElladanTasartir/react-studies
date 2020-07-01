import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
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
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        {/* autoClose: tanto de tempo para as mensagens fecharem em ms */}
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
