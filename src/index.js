export {
  substituirCaracteresEspeciais,
  substituirCaracteresEspeciais as replaceSpecialCharacters,
  formatarTelefone,
  formatarTelefone as formatPhone,
  formatarDinheiro,
  formatarDinheiro as formatMoney,
  calcularIdadeAtual,
  calcularIdadeAtual as calculateCurrentAge,
  primeiraLetraParaMaiuscula,
  primeiraLetraParaMaiuscula as primeiroCaracterParaMaiuscula,
  primeiraLetraParaMaiuscula as firstCharToUpper,
} from './formatadores';

export {
  separarParametrosUrl,
  separarParametrosUrl as getQueryParams,
} from './url';

export * as session from './sessionStorage';

export {
  gerarIdAleatorio,
  gerarIdAleatorio as generateRandomId,
  regraDeTresPorcentagem,
  regraDeTresPorcentagem as ruleOfThreePercentage,
  obterElementoAleatorioArray,
  obterElementoAleatorioArray as getRandomArrayElement,
} from './utils';

export {
  adicionarListenerTeclas,
  adicionarListenerTeclas as addKeysListener,
} from './teclas';

export {
  default as Criptografia,
  default as Criptography,
} from './Criptografia';
