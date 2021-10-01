import store from '@/store';

describe('States', () => {
  it('deve conter um state para armazenar as tarefas pendentes', () => {
    const { tarefasAFazer } = store.state;

    expect(tarefasAFazer).not.toBeUndefined();
    expect(Array.isArray(tarefasAFazer)).toBeTruthy();
  });
});
