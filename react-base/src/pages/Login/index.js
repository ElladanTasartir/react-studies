import React, { useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

export default function Login() {
  useEffect(() => {
    async function GetData() {
      try {
        const response = await axios.get('/alunos');
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    GetData();
  }, []); // Quando vazio atualiza só na primeira montagem
  // Array de dependências

  return (
    <Container>
      {/* Pode ser escrito como React.Fragment, é a mesma coisa */}
      <Title isRed>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
