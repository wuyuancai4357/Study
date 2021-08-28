import { createStore } from "vuex";

export default createStore({
  state: { count: 0 },
  mutations: {
    increment(state, payload) {
      const newval = (state.count += payload.amount);
      console.log("setMessageAction triggered with", newval);
    },
  },
  actions: {},
  modules: {},
});
