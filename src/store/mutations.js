export default {
  CONCLUIR_TAREFA: (state, tarefaIndice) => {
    state.tarefasAFazer.splice(tarefaIndice, 1);
  },
  REFAZER_TAREFA: (state, tarefaIndice) => {
    state.tarefasConcluidas.splice(tarefaIndice, 1);
  },
  ADD_TAREFA: (state, tarefa) => {
    state.tarefasAFazer.push(tarefa);
  },
};
