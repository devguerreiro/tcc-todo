import { mount } from '@vue/test-utils';
import ListCompletedTasks from '@/components/todo/ListCompletedTasks.vue';

describe('ListCompletedTasks', () => {
  it('deve listar as tarefas concluídas', () => {
    // arrange -> dado duas tarefas concluídas retornadas pelo getter
    const $store = {
      getters: {
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
    expect(wrapper.findAll('li[completed-task]').length).toBe($store.getters.completedTasks.length);
  });

  it('deve permitir refazer uma tarefa concluída', async () => {
    // arrange -> dado uma tarefa concluída retornada pelo getter
    const $store = {
      getters: {
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
    await wrapper.find('li[completed-task] + i').trigger('click');

    // assert -> então o dispatch deve chamar a action passando o índice da tarefa como argumento
    expect($store.dispatch).toHaveBeenCalledWith('redoTask', 0);
  });
});
