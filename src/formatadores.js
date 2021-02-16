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

export const formatarTelefone = (entrada) => {
  let value;
  const val = [];

  if (entrada) {
    if (
      typeof (entrada) !== 'number'
      && entrada.search(/[^0-9]/g) > -1
    ) return false;
    if (typeof (entrada) !== 'string') entrada = entrada.toString();
    if (entrada.length === 8) {
      val[0] = entrada.substr(0, 4);
      val[1] = entrada.substr(4, 4);
      value = `${val[0]}-${val[1]}`;
    } else if (entrada.length === 9) {
      val[0] = `${entrada.substr(0, 1)} ${entrada.substr(1, 4)}`;
      val[1] = entrada.substr(5, 4);
      value = `${val[0]}-${val[1]}`;
    } else if (entrada.length === 10) {
      val[0] = entrada.substr(0, 2);
      val[1] = entrada.substr(2, 4);
      val[2] = entrada.substr(6, 4);
      value = `(${val[0]}) ${val[1]}-${val[2]}`;
    } else if (entrada.length === 11) {
      val[0] = entrada.substr(0, 2);
      val[1] = `${entrada.substr(2, 1)} ${entrada.substr(3, 4)}`;
      val[2] = entrada.substr(7, 4);
      value = `(${val[0]}) ${val[1]}-${val[2]}`;
    }
  }
  return value;
};

export const formatarDinheiro = (entrada, moeda = 'BRL') => {
  if (Number.isNaN(entrada) || typeof (entrada) !== 'number' || !(entrada)) return false;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: moeda,
  }).format(entrada);
};

/*
export function formatarPorcentagem(entrada) {
  try {
    const value = `${entrada}`.substr(0, 5).replace('.', ',');
    const valueSeparado = value.split((','));
    const [casaInteira = '', casaDecimal = ''] = valueSeparado;

    if (casaDecimal.length === 1) {
      return `${casaInteira},${casaDecimal}0 %`;
    }

    return `${value} %`;
  } catch (error) {
    return false;
  }
}
*/

export const calcularIdadeAtual = (entrada, final = new Date()) => {
  if (entrada) {
    const initialDate = new Date(entrada);

    const finalDate = new Date(final);

    if (!Number.isNaN(initialDate.getDate())) {
      const diff = (finalDate - initialDate) / (1000 * 60 * 60 * 24 * 365);
      return parseInt(diff, 10);
    }
    return false;
  }
  return false;
};
