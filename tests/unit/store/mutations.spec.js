import mutations from '@/store/mutations';

describe('Mutations', () => {
  it('deve remover da lista de tarefas pendentes', () => {
    const state = {
      tarefasAFazer: ['Tarefa 1'],
    };

    mutations.CONCLUIR_TAREFA(state, 0);

    expect(state.tarefasAFazer.length).toBe(0);
  });

  it('deve remover da lista de tarefas concluídas', () => {
    const state = {
      tarefasConcluidas: ['Tarefa 1'],
    };

    mutations.REFAZER_TAREFA(state, 0);

    expect(state.tarefasConcluidas.length).toBe(0);
  });

  it('deve adicionar uma tarefa na lista de pendentes', () => {
    const state = {
      tarefasAFazer: [],
    };

    mutations.ADD_TAREFA(state, 'Tarefa 1');

    expect(state.tarefasAFazer.length).toBe(1);
    expect(state.tarefasAFazer).toEqual(['Tarefa 1']);
  });
});
