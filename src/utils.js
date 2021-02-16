export const gerarIdAleatorio = (multiplier = Math.ceil(Math.random() * 100)) => (`${Date.now()}_${multiplier * (Math.ceil(Math.random() * 100))}`);

export const regraDeTresPorcentagem = (total, valor) => (valor / total) * 100;

export const obterElementoAleatorioArray = (array) => {
  const totalElementos = array.length;
  return (
    array[Math.floor(Math.random(totalElementos) * totalElementos)]
  );
};
