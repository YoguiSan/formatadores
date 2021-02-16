import {
  gerarIdAleatorio,
  regraDeTresPorcentagem,
  obterElementoAleatorioArray,
} from '..';

describe('testes de funções utilitárias', () => {
  test('gera um ID aleatório', () => {
    expect(gerarIdAleatorio).toBeDefined();
  });

  test('faz regra de 3', () => {
    expect(regraDeTresPorcentagem(100, 30)).toEqual(30);
    expect(regraDeTresPorcentagem(1000, 300)).toEqual(30);
    expect(regraDeTresPorcentagem(200, 60)).toEqual(30);
    expect(regraDeTresPorcentagem(400, 10)).toEqual(2.5);
  });

  test('retorna um elemento aleatório de um array', () => {
    const array = ['um', 'dois', 'tres'];

    expect(array).toContain(obterElementoAleatorioArray(array));
  });
});
