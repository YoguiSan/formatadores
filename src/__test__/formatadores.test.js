import {
  substituirCaracteresEspeciais,
  formatarTelefone,
  formatarDinheiro,
  calcularIdadeAtual,
  primeiroCaracterParaMaiuscula,
} from '..';

import TestConfig from './configure';

const { mockCurrentDate } = TestConfig;

describe('testes de formatação de caracteres especiais', () => {
  test('substitui caracteres especiais', () => {
    expect(substituirCaracteresEspeciais('rogério')).toEqual('rogerio');
    expect(substituirCaracteresEspeciais('márcia osório cônego rêgo arântes jacuí da conceição'))
      .toEqual('marcia osorio conego rego arantes jacui da conceicao');
  });
});

describe('testes de formatação de telefone', () => {
  test('formata um telefone', () => {
    let phone = '11987654321';

    expect(formatarTelefone(phone)).toEqual('(11) 9 8765-4321');

    phone = '1112345678';
    expect(formatarTelefone(phone)).toEqual('(11) 1234-5678');

    phone = '12345678';
    expect(formatarTelefone(phone)).toEqual('1234-5678');
    phone = 12345678;
    expect(formatarTelefone(phone)).toEqual('1234-5678');

    phone = '987654321';
    expect(formatarTelefone(phone)).toEqual('9 8765-4321');

    phone = 'o1234567';
    expect(formatarTelefone(phone)).toBeFalsy();

    expect(formatarTelefone()).toBeUndefined();
  });
});

describe('testes de formatação de dinheiro', () => {
  test('formata um valor de dinheiro', () => {
    expect(formatarDinheiro(111.22)).toEqual('R$ 111,22');
    expect(formatarDinheiro(50.69, 'USD')).toEqual('US$ 50,69');
    expect(formatarDinheiro('a')).toBeFalsy();
  });
});

describe('testes de cálculo de idade', () => {
  beforeEach(() => mockCurrentDate());

  test('calcula a idade atual', () => {
    let initialDate = new Date('2000-01-01');
    let finalDate = '2020-01-01';
    expect(calcularIdadeAtual(initialDate, finalDate)).toEqual(20);

    initialDate = '1991-10-29';
    finalDate = '2021-02-16';
    expect(calcularIdadeAtual(initialDate, finalDate)).toEqual(29);

    initialDate = '1952-02-22';
    finalDate = new Date('2021-02-21');
    expect(calcularIdadeAtual(initialDate, finalDate)).toEqual(69);

    initialDate = '1995-09-03';
    expect(typeof (calcularIdadeAtual(initialDate))).toEqual('number');

    expect(calcularIdadeAtual()).toBeFalsy();
    expect(calcularIdadeAtual('fsdzgsdfg')).toBeFalsy();
  });
});

describe('testes de formatadores', () => {
  const palavra = 'palavra';
  const frase = 'frase de teste';

  test('torna a primeira letra maiúscula', () => expect(
    primeiroCaracterParaMaiuscula(palavra),
  ).toEqual('Palavra'));
  test('torna a primeira letra de cada palavra maiúscula', () => expect(
    primeiroCaracterParaMaiuscula(frase),
  ).toEqual('Frase De Teste'));
});
