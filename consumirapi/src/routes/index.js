import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute path="/aluno/" component={Aluno} isClosed />
      <MyRoute path="/photos/:id" component={Photos} isClosed />
      <MyRoute path="/login/" component={Login} isClosed={false} />
      <MyRoute path="/register" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
