/**
 * @jest-environment jsdom
 */

import Criptografia from '../Criptografia';

const string = 'isso é uma string que será criptografada';

const windowSpy = jest.fn();

describe('testes de criptografia (browser)', () => {
  windowSpy.mockImplementation(() => ({
    location: {
      origin: 'https://example.com',
    },
  }));

  const crypto = Criptografia('aes-256-ctr', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3');

  let encrypted;

  test('disponibilidade do módulo (atualmente desabilitado para browser)', () => {
    expect(crypto.moduleEnabled).toEqual(false);
  });

  test('criptografa uma string', () => {
    encrypted = crypto.encrypt(string);

    console.log('String criptografada: ', encrypted);

    expect(typeof (encrypted)).toEqual('undefined');
  });

  test('descriptografa uma string', () => {
    const decrypted = crypto.decrypt(encrypted);

    console.log('String descriptografada: ', decrypted);

    expect(decrypted).toEqual(undefined);
  });
});

describe('testes de hashing/salting', () => {
  const str = 'string a ser hasheada';

  const crypto = Criptografia();

  test('"hasheia" uma string', () => {
    const hashed = crypto?.hashString512(str);

    console.log('string hasheada', hashed);

    expect(hashed).toEqual(undefined);
  });
});
