import { mount } from '@vue/test-utils';
import BaseInput from '@/components/base/Input.vue';

describe('BaseInput', () => {
  it('deve executar um evento ao pressionar a tecla ENTER quando o input não for vazio', async () => {
    // arrange -> dado uma função qualquer
    const callback = jest.fn();

    // arrange -> dado que a função foi passada como propriedade para o componente
    const wrapper = mount(BaseInput, {
      propsData: {
        callback,
      },
    });

    // arrange -> dado que o input não está vazio
    const input = await wrapper.find('input');
    await input.setValue('Tarefa 1');

    // act -> quando for pressionado a tecla ENTER dentro do input
    await input.trigger('keypress.enter');

    // assert -> então a função passada como propriedade deve ser chamada
    expect(callback).toHaveBeenCalled();
  });

  it('não deve executar um evento ao pressionar a tecla ENTER quando o input for vazio', async () => {
    // arrange -> dado uma função qualquer
    const callback = jest.fn();

    // arrange -> dado que a função foi passada como propriedade para o componente
    const wrapper = mount(BaseInput, {
      propsData: {
        callback,
      },
    });

    // arrange -> dado que o input está vazio
    const input = await wrapper.find('input');

    // act -> quando for pressionado a tecla ENTER dentro do input
    await input.trigger('keypress.enter');

    // assert -> então a função passada como propriedade deve não ser chamada
    expect(callback).toBeCalledTimes(0);
  });

  it('deve limpar o input após pressionar ENTER quando o input não for vazio', async () => {
    const wrapper = mount(BaseInput, {
      propsData: {
        callback: jest.fn(),
      },
    });

    const input = wrapper.find('input');

    await input.setValue('Tarefa 1');
    await input.trigger('keypress.enter');

    expect(input.element.value).toEqual('');
    expect(wrapper.vm.inputValue).toEqual('');
  });
});
