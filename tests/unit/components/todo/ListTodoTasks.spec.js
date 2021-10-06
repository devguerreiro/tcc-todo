import { mount } from '@vue/test-utils';
import ListTodoTasks from '@/components/todo/ListTodoTasks.vue';

describe('ListTodoTasks', () => {
  it('deve listar as tarefas a fazer', () => {
    // arrange -> dado duas tarefas a fazer
    const toDoTasks = () => ['Tarefa 1', 'Tarefa 2'];

    // act -> quando o componente for montado
    const wrapper = mount(ListTodoTasks, {
      computed: {
        toDoTasks,
      },
    });

    // assert -> então deve renderizar as duas tarefas
    expect(wrapper.findAll('li[todo-task]').length).toBe(toDoTasks().length);
  });

  it('deve permitir concluir uma tarefa pendente', async () => {
    // arrange -> dado uma tarefa a fazer armazenada no state
    const $store = {
      state: {
        toDoTasks: ['Tarefa 1'],
      },
      dispatch: jest.fn(),
    };

    const wrapper = mount(ListTodoTasks, {
      mocks: {
        $store,
      },
    });

    // act -> quando for clicado no botão de concluir tarefa
    await wrapper.find('li[todo-id="0"] + span').trigger('click');

    // assert -> então o dispatch deve chamar a action passando o índice da tarefa como argumento
    expect($store.dispatch).toHaveBeenCalledWith('endTask', 0);
  });
});
