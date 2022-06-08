import React, { ElementType } from 'react';
import { Route } from 'react-router-dom';

interface PublicRouteProps {
  Component: ElementType
}

const PublicRoutes = ({ Component, ...rest }: PublicRouteProps) => {
  return <Route {...rest} render={props => <Component {...props} {...rest}  /> }/>;
};

export default PublicRoutes;
