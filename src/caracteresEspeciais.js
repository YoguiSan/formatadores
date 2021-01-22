import CaracteresEspeciais from './json/CaracteresEspeciais.json';

export const substituirCaracteresEspeciais = (entrada) => {
  let saida = entrada.toLowerCase();

  Object.keys(CaracteresEspeciais)
    .map((caracterAlvo) => {
      let regex = [];
      CaracteresEspeciais[caracterAlvo]
        .map((char) => regex.push(char));
      regex = new RegExp(`[${regex.join('')}]`, 'g');

      saida = saida.replace(regex, caracterAlvo);
      return saida;
    });

  return saida;
};
