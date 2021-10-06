import { mount } from '@vue/test-utils';
import ListarConcluidas from '@/components/todo/ListarConcluidas.vue';

describe('ListarConcluidas', () => {
  it('deve listar as tarefas concluídas', () => {
    // arrange -> dado duas tarefas concluídas armazenadas no state
    const $store = {
      state: {
        tarefasConcluidas: ['Tarefa 1', 'Tarefa 2'],
      },
    };

    // act -> quando o componente for montado
    const wrapper = mount(ListarConcluidas, {
      mocks: {
        $store,
      },
    });

    // assert -> então deve renderizar as duas tarefas
    expect(wrapper.findAll('li[todo-tarefa-concluida]').length).toBe($store.state.tarefasConcluidas.length);
  });

  it('deve permitir refazer uma tarefa concluída', async () => {
    // arrange -> dado uma tarefa concluída armazenadas no state
    const $store = {
      state: {
        tarefasConcluidas: ['Tarefa 1'],
      },
      dispatch: jest.fn(),
    };

    const wrapper = mount(ListarConcluidas, {
      mocks: {
        $store,
      },
    });

    // act -> quando for clicado no botão de refazer tarefa
    await wrapper.find('li[todo-tarefa-concluida] + span').trigger('click');

    // assert -> então o dispatch deve chamar a action passando o índice da tarefa como argumento
    expect($store.dispatch).toHaveBeenCalledWith('refazerTarefa', 0);
  });
});
