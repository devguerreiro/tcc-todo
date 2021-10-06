export default {
  endTask: ({ commit }, taskIndex) => {
    commit('END_TASK', taskIndex);
  },
  redoTask: ({ commit }, taskIndex) => {
    commit('REDO_TASK', taskIndex);
  },
  addTask: ({ commit }, task) => {
    commit('ADD_TASK', task);
  },
};
