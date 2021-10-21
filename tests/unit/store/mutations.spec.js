import mutations from '@/store/mutations';

describe('Mutations', () => {
  it('deve remover da lista de tarefas pendentes e adicionar na lista de concluídas', () => {
    const state = {
      toDoTasks: '["Tarefa 1"]',
      completedTasks: '[]',
    };

    mutations.END_TASK(state, 0);

    const toDoTasks = JSON.parse(state.toDoTasks);
    const completedTasks = JSON.parse(state.completedTasks);

    expect(toDoTasks.length).toBe(0);
    expect(toDoTasks).toEqual([]);

    expect(completedTasks.length).toBe(1);
    expect(completedTasks).toEqual(['Tarefa 1']);
  });

  it('deve remover da lista de tarefas concluídas e adicionar na lista de pendentes', () => {
    const state = {
      toDoTasks: '[]',
      completedTasks: '["Tarefa 1"]',
    };

    mutations.REDO_TASK(state, 0);

    const toDoTasks = JSON.parse(state.toDoTasks);
    const completedTasks = JSON.parse(state.completedTasks);

    expect(completedTasks.length).toBe(0);
    expect(completedTasks).toEqual([]);

    expect(toDoTasks.length).toBe(1);
    expect(toDoTasks).toEqual(['Tarefa 1']);
  });

  it('deve adicionar uma tarefa na lista de pendentes', () => {
    const state = {
      toDoTasks: '[]',
    };

    mutations.ADD_TASK(state, 'Tarefa 1');

    const toDoTasks = JSON.parse(state.toDoTasks);

    expect(toDoTasks.length).toBe(1);
    expect(toDoTasks).toEqual(['Tarefa 1']);
  });
});
