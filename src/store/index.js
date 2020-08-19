import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null
  },

  mutations: {
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = null;
    }
  },

  actions: {
    login(context, payload) {
      context.commit("login", payload);
    },

    logout(context) {
      context.commit("logout");
    }
  },

  getters: {
    getToken(state) {
      return state.token;
    }
  },

  plugins: [createPersistedState()],

  modules: {}
});
