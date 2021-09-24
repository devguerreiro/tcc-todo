// VERSÃO 1
// ========

// import { mount } from '@vue/test-utils';
// import ListarConcluidas from '@/components/todo/ListarConcluidas.vue';

// describe('ListarConcluidas', () => {
//   it('deve listar as tarefas concluídas', () => {
//     const tarefasConcluidas = ['Tarefa 1', 'Tarefa 2'];

//     const wrapper = mount(ListarConcluidas, {
//       data: () => ({
//         tarefasConcluidas,
//       }),
//     });

//     expect(wrapper.findAll('[todo-tarefaConcluida]').length).toBe(tarefasConcluidas.length);
//   });
// });

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

    expect(wrapper.findAll('[todo-tarefaConcluida]').length).toBe(tarefasConcluidas().length);
  });
});
