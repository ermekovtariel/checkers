import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Pages/Auth';

import Game from './Pages/Game';

export const useRoutes = ({ setUser, user }) => {
  if (user) {
    return (
      <Switch>
        <Route exact path='/' render={() => <Game />} />
        <Redirect to={'/'} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path={'/auth'} render={() => <Auth setUser={setUser} />} exact />
      <Redirect to={'/auth'} />
    </Switch>
  );
};
