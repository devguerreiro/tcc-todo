import { mount } from '@vue/test-utils';
import ListarAFazer from '@/components/todo/ListarAFazer.vue';

describe('ListarAFazer', () => {
  it('deve listar as tarefas a fazer', () => {
    const tarefasAFazer = () => ['Tarefa 1', 'Tarefa 2'];

    const wrapper = mount(ListarAFazer, {
      computed: {
        tarefasAFazer,
      },
    });

    expect(wrapper.findAll('li[todo-tarefaAFazer]').length).toBe(tarefasAFazer().length);
  });

  it('deve permitir concluir uma tarefa pendente', async () => {
    const $store = {
      state: {
        tarefasAFazer: ['Tarefa 1'],
      },
      dispatch: jest.fn(),
    };

    const wrapper = mount(ListarAFazer, {
      mocks: {
        $store,
      },
    });

    await wrapper.find('li[todo-id="0"] + span').trigger('click');

    expect($store.dispatch).toHaveBeenCalledWith('concluirTarefa', 0);
  });
});
