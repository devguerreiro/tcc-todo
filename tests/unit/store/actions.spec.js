import actions from '@/store/actions';

describe('Actions', () => {
  it('deve fazer o commit da conclusão da tarefa do índice informado', () => {
    const commit = jest.fn();

    actions.concluirTarefa({ commit }, 0);

    expect(commit).toHaveBeenCalledWith('CONCLUIR_TAREFA', 0);
  });

  it('deve fazer o commit da refação da tarefa do índice informado', () => {
    const commit = jest.fn();

    actions.refazerTarefa({ commit }, 0);

    expect(commit).toHaveBeenCalledWith('REFAZER_TAREFA', 0);
  });
});
