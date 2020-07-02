import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

// import axios from '../../services/axios';

export default function Login() {
  // Disparador de ações para o redux
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    // Ações são o que vai descrever para o Reducer o que ele tem que fazer
    // Ela é disparada, ela tem um tipo e esse tipo vai falar para o reducer
    // O que precisa ser feito
    // Pode receber um payload, caso seja necessário
    dispatch(exampleActions.clicaBotaoRequest());
    // Pode-se disparar mais de uma ação dentro de uma mesma função, sem problema algum
  }

  return (
    <Container>
      {/* <> Pode ser escrito como React.Fragment, é a mesma coisa */}
      <Title isRed>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
