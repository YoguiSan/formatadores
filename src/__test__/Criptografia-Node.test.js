import Criptografia from '../Criptografia';

const string = 'isso é uma string que será criptografada';

const windowSpy = jest.fn();

describe('testes de criptografia (node)', () => {
  windowSpy.mockImplementation(() => undefined);
  const crypto = Criptografia('aes-256-ctr', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3');

  let encrypted;

  test('disponibilidade do módulo', () => {
    expect(crypto.moduleEnabled).toEqual(true);
  });

  test('criptografa uma string', () => {
    encrypted = crypto.encrypt(string);

    console.log('String criptografada: ', encrypted);

    expect(typeof (encrypted)).toEqual('object');
  });

  test('descriptografa uma string', () => {
    const decrypted = crypto.decrypt(encrypted);

    console.log('String descriptografada: ', decrypted);

    expect(decrypted).toEqual(string);
  });
});

describe('testes de hashing/salting', () => {
  const str = 'string a ser hasheada';

  const crypto = Criptografia();

  test('"hasheia" uma string', () => {
    const hashed = crypto.hashString512(str);

    console.log('string hasheada', hashed);

    expect(hashed.length).toEqual(128);
  });
});
