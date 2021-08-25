import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { RootState } from '../reducers';
import { privateRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const { isAuth } = useSelector((state: RootState) => state.user);

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, Component }: any) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }: any) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
