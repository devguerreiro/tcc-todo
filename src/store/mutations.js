export default {
  CONCLUIR_TAREFA: (state, tarefaIndice) => {
    const task = state.tarefasAFazer.splice(tarefaIndice, 1);

    state.tarefasConcluidas.push(task);
  },
  REFAZER_TAREFA: (state, tarefaIndice) => {
    const task = state.tarefasConcluidas.splice(tarefaIndice, 1);

    state.tarefasAFazer.push(task);
  },
  ADD_TAREFA: (state, tarefa) => {
    state.tarefasAFazer.push(tarefa);
  },
};
