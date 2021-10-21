import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toDoTasks: localStorage.getItem('toDoTasks') || '[]',
    completedTasks: localStorage.getItem('completedTasks') || '[]',
  },
  mutations,
  actions,
  getters,
  modules: {
  },
});
