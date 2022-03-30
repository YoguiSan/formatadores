/**
 * @jest-environment jsdom
 */

import { obterRolagemJanela, obterPosicaoRolagem } from '../janela';

const windowSpy = jest.fn();

windowSpy.mockImplementation(() => ({
  location: {
    origin: 'https://examp.le',
  },
}));

let documentSpy;

beforeAll(() => documentSpy = jest.spyOn(document, 'getElementById'));

describe('testes de funções de rolagem', () => {
  test('obtém a distância de rolagem da janela', () => {
    const scroll = obterRolagemJanela();

    expect(scroll).toEqual({
      scrollXWindow: 0,
      scrollYWindow: 0,
      widthWindow: 0,
      heightWindow: 0,
    });
  });

  test('obtém a distância de rolagem de um elemento', () => {
    const mockDiv = document.createElement('div');
    mockDiv.id = 'div';

    documentSpy.mockReturnValue(mockDiv);

    const scroll = obterPosicaoRolagem('div');
    expect(scroll).toEqual({
      scrollXWindow: 0,
      scrollYWindow: 0,
      widthWindow: 0,
      heightWindow: 0,
      scrollX: 0,
      scrollY: 0,
      widthElement: 0,
      heightElement: 0,
    });
  });
});
