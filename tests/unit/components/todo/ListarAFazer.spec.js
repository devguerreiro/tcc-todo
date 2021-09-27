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

  it('deve remover uma tarefa da lista ao marcá-la como finalizada', async () => {
    const wrapper = mount(ListarAFazer, {
      data: () => ({
        tarefasAFazer: ['Tarefa 1', 'Tarefa 2'],
      }),
    });

    await wrapper.find('li[todo-id="0"] + span').trigger('click');

    expect(wrapper.findAll('li').length).toBe(1);
    expect(wrapper.vm.tarefasAFazer).toEqual(['Tarefa 2']);
  });
});
