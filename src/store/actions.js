export default {
  concluirTarefa: ({ commit }, tarefaIndice) => {
    commit('CONCLUIR_TAREFA', tarefaIndice);
  },
  refazerTarefa: ({ commit }, tarefaIndice) => {
    commit('REFAZER_TAREFA', tarefaIndice);
  },
  addTarefa: ({ commit }, tarefa) => {
    commit('ADD_TAREFA', tarefa);
  },
};
