import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({
  component: Component,
  // convertemos para C maiúsculo por convenção do React
  isClosed,
  ...rest
}) {
  const isLoggedIn = false;

  // Se a rota é fechada e o usuário não está logada
  // Redirect vai redirecionar o usuário à alguma rota
  if (isClosed && !isLoggedIn)
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { prevPath: rest.location.pathname },
          // Recebe o path name da última rota que o usuário acessou antes de ser redirecionado
        }}
      />
    );

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
  // se tudo der certo, vai retornar o usuário com a rota presente no rest e o componente a ser renderizado
}

MyRoute.defaultProps = {
  isClosed: false,
  // se não for enviado, receberá padrão de falso
};

MyRoute.propTypes = {
  // Fala que o componente pode ser, tanto um elemento
  // quanto uma função, já que pode ser um componente funcional/elemento do React
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
