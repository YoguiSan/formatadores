import { substituirCaracteresEspeciais } from '../index';

describe('testes de formatação de caracteres especiais', () => {
  test('substitui caracteres especiais', () => {
    expect(substituirCaracteresEspeciais('rogério')).toEqual('rogerio');
    expect(substituirCaracteresEspeciais('márcia osório cônego rêgo arântes jacuí da conceição'))
      .toEqual('marcia osorio conego rego arantes jacui da conceicao');
  });
});