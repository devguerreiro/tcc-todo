import mutations from '@/store/mutations';

describe('Mutations', () => {
  it('deve remover da lista a tarefa do índice informado', () => {
    const state = {
      tarefasAFazer: ['Tarefa 1'],
    };

    mutations.CONCLUIR_TAREFA(state, 0);

    expect(state.tarefasAFazer.length).toBe(0);
  });
});
