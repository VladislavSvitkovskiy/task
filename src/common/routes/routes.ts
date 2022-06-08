import { ElementType } from 'react';

import { Dictionary } from 'types/index';

import usersRoutes from './users-routes';

export interface Route {
  param?: string
  path: string
  label: string
  Component: ElementType
  exact?: boolean
  redirect?: boolean
}

export interface RouteDictionary extends Dictionary<Route> {};

export default { ...usersRoutes };
