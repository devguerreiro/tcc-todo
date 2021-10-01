export default {
  concluirTarefa: ({ commit }, tarefaIndice) => {
    commit('CONCLUIR_TAREFA', tarefaIndice);
  },
};
