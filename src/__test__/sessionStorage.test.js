import { session } from '..';

describe('testes de sessão', () => {
  let currentSession;

  test('deve criar uma sessão', () => {
    currentSession = session.create('testSession');
    expect(currentSession.SessionName).toEqual('testSession');
  });

  xtest('deve guardar uma chave e valor', () => {
    const value = session.set('key', 'value');
    expect(value).toEqual('value');
  });

  xtest('deve ler a partir de uma chave no armazenamento da sessão', () => {
    const item = session.get('key');
    expect(item).toEqual('value');
  });

  xtest('deve remover a partir de uma chave no armazenamento da sessão', () => {
    currentSession = session.remove('key');
    expect(currentSession.SessionName).toEqual('testSession');
  });

  xtest('deve limpar a partir de uma chave no armazenamento da sessão', () => {
    currentSession = session.clear('key');
    expect(currentSession.SessionName).toEqual('testSession');
  });

  test('deve limpar armazenamento da sessão', () => {
    currentSession = session.clear();
    expect(currentSession.SessionName).toBeUndefined();
  });
});
