/**
 * @jest-environment jsdom
 */

import { obterPosicaoRolagem } from '..';

const windowSpy = jest.fn();

windowSpy.mockImplementation(() => ({
  location: {
    origin: 'https://examp.le',
  },
}));

describe('testes de funções relacionadas à janela', () => {
  test('obtém a distância de rolagem da janela', () => {
    const scroll = obterPosicaoRolagem();

    expect(scroll).toEqual({
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      horizontal: 0,
      vertical: 0,
    });
  });
});
