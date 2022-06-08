import React from 'react';
import { Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import { useAppDispatch } from 'hooks';

import PublicRoute from './Public';
import routes from './routes';

const Routes = () =>  {
  const dispatch = useAppDispatch();
  const props = { dispatch };

  return (
    <Layout { ...props } >
      <Switch>
        {Object.values(routes).map((route, i) => {
          return <PublicRoute key={i} {...route} {...props} />;
        })}
      </Switch>
    </Layout>
  );
};

export default Routes;
