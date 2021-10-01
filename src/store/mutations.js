export default {
  CONCLUIR_TAREFA: (state, tarefaIndice) => {
    state.tarefasAFazer.splice(tarefaIndice, 1);
  },
};
