import { mount } from '@vue/test-utils';
import ListCompletedTasks from '@/components/todo/ListCompletedTasks.vue';

describe('ListCompletedTasks', () => {
  it('deve listar as tarefas concluídas', () => {
    // arrange -> dado duas tarefas concluídas armazenadas no state
    const $store = {
      state: {
        completedTasks: ['Tarefa 1', 'Tarefa 2'],
      },
    };

    // act -> quando o componente for montado
    const wrapper = mount(ListCompletedTasks, {
      mocks: {
        $store,
      },
    });

    // assert -> então deve renderizar as duas tarefas
    expect(wrapper.findAll('li[completed-task]').length).toBe($store.state.completedTasks.length);
  });

  it('deve permitir refazer uma tarefa concluída', async () => {
    // arrange -> dado uma tarefa concluída armazenadas no state
    const $store = {
      state: {
        completedTasks: ['Tarefa 1'],
      },
      dispatch: jest.fn(),
    };

    const wrapper = mount(ListCompletedTasks, {
      mocks: {
        $store,
      },
    });

    // act -> quando for clicado no botão de refazer tarefa
    await wrapper.find('li[completed-task] + span').trigger('click');

    // assert -> então o dispatch deve chamar a action passando o índice da tarefa como argumento
    expect($store.dispatch).toHaveBeenCalledWith('redoTask', 0);
  });
});
