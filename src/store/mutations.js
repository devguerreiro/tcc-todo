export default {
  CONCLUIR_TAREFA: (state, tarefaIndice) => {
    state.tarefasAFazer.splice(tarefaIndice, 1);
  },
  REFAZER_TAREFA: (state, tarefaIndice) => {
    state.tarefasConcluidas.splice(tarefaIndice, 1);
  },
};
