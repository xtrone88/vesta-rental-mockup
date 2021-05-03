import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: [
      {title:"Auction Outbid", content:"Your Bid of $500 for Halleck apartment is outbid", date:"2021-03-21"},
      {title:"Auction Outbid", content:"Your Bid of $500 for Halleck apartment is outbid", date:"2021-03-21"},
      {title:"Auction Outbid", content:"Your Bid of $500 for Halleck apartment is outbid", date:"2021-03-21"}
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
});
