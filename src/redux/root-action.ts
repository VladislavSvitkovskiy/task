import { routerActions } from 'connected-react-router';

import actions from './slices';

export default {
  router: routerActions,
  ...actions
};
