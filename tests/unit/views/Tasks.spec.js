import { mount } from '@vue/test-utils';
import Tasks from '@/views/Tasks.vue';

describe('Tasks', () => {
  it('deve renderizar as tarefas pendentes e concluídas', () => {
    // arrange -> dado uma tarefa pendente e uma tarefa concluída retornada pelo getter
    const $store = {
      getters: {
        toDoTasks: ['Tarefa 2'],
        completedTasks: ['Tarefa 1'],
      },
    };

    // act -> quando o componente for montado
    const wrapper = mount(Tasks, {
      mocks: {
        $store,
      },
    });

    // assert -> então o componente deve renderizar as tarefas pendentes e as tarefas concluídas
    expect(wrapper.findAll('li[todo-task]').length).toBe(1);
    expect(wrapper.findAll('li[completed-task]').length).toBe(1);
  });

  it('deve fazer o dispatch para adicionar uma nova tarefa na lista de pendentes ao pressionar ENTER', async () => {
    // arrange -> dado uma store com dispatch 'mockado'
    const $store = {
      getters: {
        toDoTasks: '',
        completedTasks: '',
      },
      dispatch: jest.fn(),
    };

    const wrapper = mount(Tasks, {
      mocks: {
        $store,
      },
    });

    // arrange -> dado o input na tela de tarefas
    const input = wrapper.findComponent({ name: 'BaseInput' }).find('input');

    // act -> quando digitar a tarefa e pressionar ENTER
    await input.setValue('Tarefa 1');
    await input.trigger('keypress.enter');

    // assert -> então deve fazer o dispatch para adicionar a tarefa na lista de pendências
    expect($store.dispatch).toHaveBeenCalledWith('addTask', 'Tarefa 1');
  });
});
