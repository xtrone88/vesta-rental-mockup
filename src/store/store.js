import Vue from "vue";
import Vuex from "vuex";
import Amplify from 'aws-amplify';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: [
      {title:"Auction Outbid", content:"Your Bid of $500 for Halleck apartment is outbid", date: "2021-03-21"},
      {title:"New Property Listed", content:"Your Bid of $500 for Janet ave apartment is outbid", date: "2021-03-21"},
      {title:"Auction Outbid", content:"Your Bid of $500 for Janet ave apartment is outbid", date: "2021-03-22"},
      {title:"Property listed for lease", content:"New property for lease in 326 H street", date: "2021-03-22"},
    ],
    payments: [
      {title:"Visa *** 1316", date:"06/2023"},
      {title:"MasterCard **** 1010", date:"01/2022"}
    ],
    user_info: {firstname:'', lastname:'', email:'', phone:'', birthday: '', address1:'',address2:'', city:'', state:'', zip:''},
    user_log: '',
    user_id: ''
  },
  mutations: {
    setUserInfo(state, data){
      state.user_info = data
    },
    setPaymentsInfo(state, data) {
      state.payments = data
    },
    setUserLogInfo(state, param){
      state.user_id = param.id
      state.user_log = param.state
      if(param.state != "signedin")
        Amplify.Auth.signOut();
    },
  },
  actions: {
    setUserInfo({commit}, data) {
      commit('setUserInfo', data)
    },
  },
  getters: {
    notifications(state) {
      return state.notifications
    },
    notifCount(state) {
      return state.notifications.length
    },
    user_info(state) {
      return state.user_info
    },
    paymentInfo(state) {
      return state.payments
    },
    loginStatus(state) {
      return state.user_log
    },
    user_id(state) {
      return state.user_id
    }
  }
});
