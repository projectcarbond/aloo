import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

function Layout() {
  return (
    <React.Fragment>
      <div>Header</div>
      <Switch>
        { routes.map(route => <Route key={route.path} {...route} />) }
      </Switch>
      <div>Footer</div>
    </React.Fragment>
  );
}

export default Layout;
