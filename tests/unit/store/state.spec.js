import store from '@/store';

describe('States', () => {
  it('deve conter um state para armazenar as tarefas pendentes', () => {
    const { toDoTasks } = store.state;

    expect(toDoTasks).not.toBeUndefined();
    expect(Array.isArray(toDoTasks)).toBeTruthy();
  });
  it('deve conter um state para armazenar as tarefas concluídas', () => {
    const { completedTasks } = store.state;

    expect(completedTasks).not.toBeUndefined();
    expect(Array.isArray(completedTasks)).toBeTruthy();
  });
});
