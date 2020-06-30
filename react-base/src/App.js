import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      {/* autoClose: tanto de tempo para as mensagens fecharem em ms */}
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
