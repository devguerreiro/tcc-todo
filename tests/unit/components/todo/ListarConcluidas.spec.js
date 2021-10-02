import { mount } from '@vue/test-utils';
import ListarConcluidas from '@/components/todo/ListarConcluidas.vue';

describe('ListarConcluidas', () => {
  it('deve listar as tarefas concluídas', () => {
    const tarefasConcluidas = () => ['Tarefa 1', 'Tarefa 2'];

    const wrapper = mount(ListarConcluidas, {
      computed: {
        tarefasConcluidas,
      },
    });

    expect(wrapper.findAll('li[todo-tarefaConcluida]').length).toBe(tarefasConcluidas().length);
  });

  it('deve permitir refazer uma tarefa concluída', async () => {
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

    await wrapper.find('li[todo-tarefaConcluida] + span').trigger('click');

    expect($store.dispatch).toHaveBeenCalledWith('refazerTarefa', 0);
  });
});
