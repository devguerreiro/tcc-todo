// VERSÃO 1
// ========

// import { mount } from '@vue/test-utils';
// import BaseInput from '@/components/base/Input.vue';

// describe('BaseInput', () => {
//   it('deve executar a callback ao pressionar a tecla enter', async () => {
//     // arrange -> dado uma função qualquer
//     const callback = jest.fn();

//     // arrange -> dado que o componente foi montado
//     const wrapper = mount(BaseInput);

//     // act -> quando for pressionado a tecla ENTER dentro do input
//     await wrapper.find('input').trigger('keydown.enter');

//     // assert -> então a função passada como propriedade deve ser chamada
//     expect(callback).toHaveBeenCalled();
//   });
// });

import { mount } from '@vue/test-utils';
import BaseInput from '@/components/base/Input.vue';

describe('BaseInput', () => {
  it('deve executar um evento ao pressionar a tecla enter', async () => {
    // arrange -> dado uma função qualquer
    const callback = jest.fn();

    // arrange -> dado que a função foi passada como propriedade para o componente
    const wrapper = mount(BaseInput, {
      propsData: {
        callback,
      },
    });

    // act -> quando for pressionado a tecla ENTER dentro do input
    await wrapper.find('input').trigger('keypress.enter');

    // assert -> então a função passada como propriedade deve ser chamada
    expect(callback).toHaveBeenCalled();
  });
});
