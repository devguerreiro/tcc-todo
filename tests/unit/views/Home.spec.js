import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home', () => {
  it('deve fazer o dispatch para adicionar uma nova tarefa na lista de pendentes ao pressionar ENTER', async () => {
    // arrange -> dado uma store com dispatch 'mockado'
    const $store = {
      dispatch: jest.fn(),
    };

    // arrange -> dado um router com o push 'mockado'
    const $router = {
      push: jest.fn(),
    };

    const wrapper = mount(Home, {
      mocks: {
        $store,
        $router,
      },
    });

    // arrange -> dado o input na tela principal
    const input = wrapper.findComponent({ name: 'BaseInput' }).find('input');

    // act -> quando chamar a callback
    await input.setValue('Tarefa 1');
    await input.trigger('keypress.enter');

    // assert -> então deve fazer o dispatch para adicionar a tarefa na lista de pendências
    expect($store.dispatch).toHaveBeenCalledWith('addTask', 'Tarefa 1');
  });
  it('deve fazer o dispatch para adicionar uma nova tarefa na lista de pendentes ao clicar no botão', async () => {
    // arrange -> dado uma store com dispatch 'mockado'
    const $store = {
      dispatch: jest.fn(),
    };

    // arrange -> dado um router com o push 'mockado'
    const $router = {
      push: jest.fn(),
    };

    const wrapper = mount(Home, {
      mocks: {
        $store,
        $router,
      },
    });

    // arrange -> dado o input na tela principal
    const input = wrapper.findComponent({ name: 'BaseInput' }).find('input');

    // arrange -> dado o botão na tela principal
    const button = wrapper.findComponent({ name: 'BasePlusButton' }).find('i');

    // act -> quando digitar a tarefa e clicar no botão
    await input.setValue('Tarefa 1');
    await button.trigger('click');

    // assert -> então deve fazer o dispatch para adicionar a tarefa na lista de pendências
    expect($store.dispatch).toHaveBeenCalledWith('addTask', 'Tarefa 1');
  });
  it('deve redirecionar para a tela de tarefas quando adicionar uma nova tarefa', async () => {
    // arrange -> dado uma store com dispatch 'mockado'
    const $store = {
      dispatch: jest.fn(),
    };

    // arrange -> dado um router com o push 'mockado'
    const $router = {
      push: jest.fn(),
    };

    const wrapper = mount(Home, {
      mocks: {
        $store,
        $router,
      },
    });

    // act -> quando chamar a função para adicionar uma tarefa
    wrapper.vm.handleAddTask();

    // assert -> então deve redirecionar para a rota de tarefas
    expect($router.push).toHaveBeenCalledWith({ name: 'Tasks' });
  });
});
