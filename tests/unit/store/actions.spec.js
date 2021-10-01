import actions from '@/store/actions';

describe('Actions', () => {
  it('deve fazer o commit da conclusão da tarefa do índice informado', () => {
    const commit = jest.fn();

    actions.concluirTarefa({ commit }, 0);

    expect(commit).toHaveBeenCalledWith('CONCLUIR_TAREFA', 0);
  });
});
