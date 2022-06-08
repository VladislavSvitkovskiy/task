import * as pages from 'pages';

import { RouteDictionary } from './routes';

export default {
  users: {
    path: '/',
    label: 'Users',
    exact: true,
    Component: pages.UsersPage
  },
  user: {
    path: '/:userName',
    label: 'User',
    exact: true,
    Component: pages.UserPage
  }
} as RouteDictionary;
