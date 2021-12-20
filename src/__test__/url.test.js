/**
 * @jest-environment jsdom
 */

import { separarParametrosUrl } from '..';

describe('testes de parâmetros da URL', () => {
  test('deve retornar um objeto com os parâmetros da URL separados (passando window.location.search como parâmetro)', () => {
    const query = '?parametro1=um&parametro2=dois';

    expect(separarParametrosUrl(query)).toEqual({
      parametro1: 'um',
      parametro2: 'dois',
    });
  });

  global.window = Object.create(window);

  const url = 'http://tes.te';
  const search = '?param=1';
  const hash = {
    '#/?hash': 'hash',
  };

  Object.defineProperty(window, 'location', {
    value: {
      href: url,
      search,
    },
    writable: true,
  });

  test('deve retornar um objeto com os parâmetros da URL separados (sem informar window.location.search como parâmetro)', () => {
    expect(separarParametrosUrl()).toEqual({
      param: '1',
    });
  });

  test('retorna um objeto vazio caso não exista query informada manualmente, nem no window.location.search', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
        search: undefined,
      },
      writable: true,
    });
    expect(separarParametrosUrl()).toEqual({});
  });

  test('obtém os parâmetros do hash', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
        search: undefined,
        hash,
      },
      writable: true,
    });

    expect(separarParametrosUrl()).toEqual({
      hash: 'hash',
    });
  });
});
