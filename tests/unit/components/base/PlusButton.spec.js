import { mount } from '@vue/test-utils';
import BasePlusButton from '@/components/base/PlusButton.vue';

describe('BasePlusButton', () => {
  it('deve executar um evento ao clicar', async () => {
    // arrange -> dado uma função qualquer
    const callback = jest.fn();

    // arrange -> dado que a função foi passada como propriedade para o componente
    const wrapper = mount(BasePlusButton, {
      propsData: {
        callback,
      },
    });

    // act -> quando for clicado
    await wrapper.find('i').trigger('click');

    // assert -> então a função passada como propriedade deve ser chamada
    expect(callback).toHaveBeenCalled();
  });
});
