import nock from 'nock';

import { checarVersao } from '../versao';
import PackageJson from './json/package-mock.json';

describe('testes de checagem de versão', () => {
  const url = 'https://localhost:333';
  const callback = (params) => console.log(params);

  test('verifica que a versão é menor que a do meta.json', async () => {
    nock(url)
      .get('/')
      .query(true)
      .reply(200, { version: '1.2.1' });

    const {
      isOutdated,
      error,
      version,
    } = await checarVersao(PackageJson, url, callback);

    if (error) {
      console.log(error);
    }

    console.log(version);

    expect(isOutdated).toBeTruthy();
  });

  test('verifica que a versão é maior que a do meta.json', async () => {
    nock(url)
      .get('/')
      .query(true)
      .reply(200, { version: '1.01' });

    const {
      isOutdated,
    } = await checarVersao(PackageJson, url, callback);

    expect(isOutdated).toBeFalsy();
  });

  test('exibe erro ocorrido ao tentar comparar versões', async () => {
    nock(url)
      .get('/')
      .query(true)
      .reply(400, { error: 'yes' });

    const { error } = await checarVersao(PackageJson, url, callback);

    expect(error).toEqual('yes');
  });
});
