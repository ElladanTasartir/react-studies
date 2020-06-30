import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  // Não se pode usar Link sem ter um Router ao menos em volta dele
  // Para isso, podemos envolver a aplicação, nesse exemplo com um
  // BrowserRouter, pra poder garantir essa transição de rotas
  // E a utilização de Links
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
    </Nav>
  );
}
