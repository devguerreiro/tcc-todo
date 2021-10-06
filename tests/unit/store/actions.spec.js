import actions from '@/store/actions';

describe('Actions', () => {
  it('deve fazer o commit da conclusão da tarefa do índice informado', () => {
    const commit = jest.fn();

    actions.endTask({ commit }, 0);

    expect(commit).toHaveBeenCalledWith('END_TASK', 0);
  });

  it('deve fazer o commit da refação da tarefa do índice informado', () => {
    const commit = jest.fn();

    actions.redoTask({ commit }, 0);

    expect(commit).toHaveBeenCalledWith('REDO_TASK', 0);
  });

  it('deve fazer o commit para adicionar uma tarefa na lista de pendentes', () => {
    const commit = jest.fn();

    actions.addTask({ commit }, 'Tarefa 1');

    expect(commit).toHaveBeenCalledWith('ADD_TASK', 'Tarefa 1');
  });
});
