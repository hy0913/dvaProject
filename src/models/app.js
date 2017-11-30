import {parse} from 'qs';
import * as cookies from '../utils/cookie';

export default {
  namespace: 'app',
  state: {
    login: false,
    loginButtonLoading: false,
  },
  reducers: {
    loginSuccess (state, action) {

    },
    logoutSuccess (state) {

    }
  },
  effects: {
    *login ({ payload }, {call, put}) {

    },
    *logout ({ payload }, {call, put}) {

    },
  },
  subscriptions: {
    setup({dispatch,history}){
      
    }
  },
}
