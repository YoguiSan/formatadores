import * as actions from '../sessionStorage';

describe('testes de sessão', () => {
  test('deve criar uma sessão', () => {
    const session = actions.create('testSession');
    expect(session.SessionName).toEqual('testSession');
  });

  test('deve guardar uma chave e valor', () => {
    const value = actions.set('key', 'value');
    expect(value).toEqual('value');
  });

  test('deve ler a partir de uma chave no armazenamento da sessão', () => {
    const item = actions.get('key');
    expect(item).toEqual('value');
  });
  test('deve remover a partir de uma chave no armazenamento da sessão', () => {
    const session = actions.remove('key');
    expect(session.SessionName).toEqual('testSession');
  });
  test('deve limpar a partir de uma chave no armazenamento da sessão', () => {
    const session = actions.clear('key');
    expect(session.SessionName).toEqual('testSession');
  });

  test('deve limpar armazenamento da sessão', () => {
    const session = actions.clear();
    expect(session.SessionName).toBeUndefined();
  });
});
