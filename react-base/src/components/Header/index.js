import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

// useSelector é um hook do Redux que consegue pegar os estados globais da aplicação

// Não se pode usar Link sem ter um Router ao menos em volta dele
// Para isso, podemos envolver a aplicação, nesse exemplo com um
// BrowserRouter, pra poder garantir essa transição de rotas
// E a utilização de Links
export default function Header() {
  const botaoClicado = useSelector((state) => state.botaoClicado);
  // Se retornamos o state para essa variável, toda vez que alteramos essa variável
  // O componente será renderizado novamente
  // Em toda página que a aplicação renderizar, ela possuirá esse estado
  // Porque ele não pertence a ninguém e sim ao nosso estado global do Redux
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt />
      </Link>
      <Link to="/aaa">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
