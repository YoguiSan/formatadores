export const gerarIdAleatorio = (multiplier = Math.ceil(Math.random() * 100)) => (`${Date.now()}_${multiplier * (Math.ceil(Math.random() * 100))}`);

export const regraDeTresPorcentagem = (total, valor) => (total * valor) / 100;
