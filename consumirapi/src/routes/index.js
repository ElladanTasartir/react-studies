import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  // É necessário envolver o componente de rotas em um Browser Router
  // Switch: permite que somente UMA rota seja chamada por vez
  // Route, recebe o endereço da rota que será acessível e o componente renderizado
  // em dada rota
  // O atributo exact path fala que o componente só será renderizado caso a rota seja exatamente igual, sem tirar
  // nem por do conteúdo colocado
  // Quando inserimos * na path, significa que essa será a rota renderizada quando não for encontrada
  // uma das rotas definidas no route, uma rota genérica

  return (
    <Switch>
      {/* Se a prop isClosed é passada, o nosso componente redirecionará
        para a rota de login, tornando essa rota inacessível */}
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
