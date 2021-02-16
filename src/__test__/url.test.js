import { separarParametrosUrl } from '..';

describe('testes de parâmetros da URL', () => {
  test('deve retornar um objeto com os parâmetros da URL separados', () => {
    const query = '?parametro1=um&parametro2=dois';

    expect(separarParametrosUrl(query)).toEqual({
      parametro1: 'um',
      parametro2: 'dois',
    });
  });

  test('retorna um objeto vazio caso não exista query na URL', () => {
    expect(separarParametrosUrl()).toEqual({});
  });
});
