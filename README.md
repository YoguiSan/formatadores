# formatadores
Formatadores simples diversos (dinheiro, data, etc.), além de algumas funções utilitárias.

## Funções formatadoras
- calcularIdadeAtual: calcula a diferença (em anos) entre duas datas. Aceita dois parâmetros, entrada (idade inicial) e final, sendo a segunda opcional (padrão: data atual)
- formatarTelefone: formata telefones de 8 e 9 dígitos (sem e com DDD), adicionando traços e parênteses. Exemplos: 11987654321 -> (11) 98765-4321
- formatarDinheiro: formata um número como moeda (padrão: real brasileiro)
- substituirCaracteresEspeciais: substitui os caracteres especiais pelos seus respectivos
- primeiraLetraParaMaiuscula: disponível também como **primeiroCaracterParaMaiuscula**, transforma o primeiro caracter de uma palavra, ou o primeiro caracter de cada palavra em uma frase, em maiúscula. Atualmennte unciona apenas para frases separadas por um *espaço* (vírgulas e pontos antes/depois do espaço não interferem)

## Funções de sessão
AS funções de session storage foram compiladas em cinco funções simples, para facilitar a manipulação dos dados nela
- create: cria uma sessão com o nome fornecido
- get: obtém o valor do parâmetro especificado
- set: guarda o valor do parâmetro especificado. Requer dois parâmetros, chave (name) e valor (value)
- remove: remove o valor do parâmetro especificado do session storage
- clear: aceita um parâmetro (opcional) nome, se especificado limpa o parâmetro informado do session storage (executa a função remove acima); se não for informado o nome, limpa a sessão

## Funções de URL
- separarParametrosUrl: retorna os parâmetros da URL (query parameters) em formato JSON

## Funções de teclas
- adicionarListenerTeclas: adiciona um event listener ao navegador para disparar uma ação quando as teclas especificadas forem pressionadas ao mesmo tempo. Requer dois parâmetros, teclas (keys, que deve ser um array de caracteres ou uma string) e callback (função a ser executada quando a combinação de teclas for pressionada)

## Funções utilitárias
- gerarIdAleatorio: retorna um número aleatório; aceita um parâmetro multiplicador (multiplier, opcional)
- regraDeTresPorcentagem: executa uma regra de três para calcular uma porcentagem; requer dois parâmetros, total (qual quantidade representa 100%) e valor (do qual será retornada a porcentagem que representa)
- obterElementoAleatorioArray: retorna um elemento aleatório do array fornecido