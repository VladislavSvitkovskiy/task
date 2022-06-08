import axios from 'axios';
import {
  UsersParamsInstance,
  UserInstance,
  UserParamsInstance
} from 'models';

export default {
  getUsersList: ({url, params, callback}: UsersParamsInstance) =>
    axios
      .get<UserInstance[]>(url, {
        params
      })
      .then(r => callback && callback(r)),

  getUser: ({url, callback}: UserParamsInstance) =>
    axios
      .get<UserInstance>(url)
      .then(r => callback && callback(r))
      .catch(error => {
        console.log(error);
      })
};
