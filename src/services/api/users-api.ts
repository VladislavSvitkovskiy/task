import axios from 'axios';
import {
  UserQueriesParamsInstance,
  UsersListQueriesParamsInstance,
  UserInstance
} from 'models';

export default {
  getUsersList: (url: string, params: UsersListQueriesParamsInstance, callback?: (r: {data: UserInstance[]}) => void) =>
    axios
      .get<UserInstance[]>(url, {
        params: params
      })
      .then(r => callback && callback(r)),

  getUser: (url: string, callback?: (r: {data: UserInstance}) => void) =>
    axios
      .get<UserInstance>(url)
      .then(r => callback && callback(r))
};
