&#12746;
# formatadores
Formatadores simples diversos (dinheiro, data, etc.), além de algumas funções utilitárias.

## Funções formatadoras
- calcularIdadeAtual: calcula a diferença (em anos) entre duas datas. Aceita dois parâmetros, entrada (idade inicial) e final, sendo a segunda opcional (padrão: data atual)
- formatarTelefone: formata telefones de 8 e 9 dígitos (sem e com DDD), adicionando traços e parênteses. Exemplos: 11987654321 -> (11) 98765-4321
- formatarDinheiro: formata um número como moeda (padrão: real brasileiro)
- substituirCaracteresEspeciais: substitui os caracteres especiais pelos seus respectivos
- primeiraLetraParaMaiuscula: disponível também como **primeiroCaracterParaMaiuscula**, transforma o primeiro caracter de uma palavra, ou o primeiro caracter de cada palavra em uma frase, em maiúscula. Atualmennte funciona apenas para palavras separadas por um *espaço* (vírgulas e pontos antes/depois do espaço não interferem)

## Funções de sessão
As funções de session storage foram compiladas em cinco funções simples, para facilitar a manipulação dos dados nela
- create: cria uma sessão com o nome fornecido
- get: obtém o valor do parâmetro especificado
- set: guarda o valor do parâmetro especificado. Requer dois parâmetros, chave (name) e valor (value)
- remove: remove o valor do parâmetro especificado do session storage
- clear: aceita um parâmetro (opcional) nome, se especificado limpa o parâmetro informado do session storage (executa a função remove acima); se não for informado o nome, limpa a sessão

## Funções de URL
- separarParametrosUrl: retorna os parâmetros da URL (query parameters) em formato JSON. Aceita um parâmetro query (opcional). Caso não seja informado o parâmetro, tentará obter primeiro da **window.location.search**, e caso não exista, da **window.location.hash**

## Funções de teclas
- adicionarListenerTeclas: adiciona um event listener ao navegador para disparar uma ação quando as teclas especificadas forem pressionadas ao mesmo tempo. Requer dois parâmetros, teclas (keys, que deve ser um array de caracteres ou uma string) e callback (função a ser executada quando a combinação de teclas for pressionada)

## Funções utilitárias
- gerarIdAleatorio: retorna um número aleatório; aceita um parâmetro multiplicador (multiplier, opcional)
- regraDeTresPorcentagem: executa uma regra de três para calcular uma porcentagem; requer dois parâmetros, total (qual quantidade representa 100%) e valor (do qual será retornada a porcentagem que representa)
- obterElementoAleatorioArray: retorna um elemento aleatório do array fornecido

## Funções de criptografia
**Obs.: as funções de criptografia funcionam apenas em ambiente Node, não sendo possível utilizá-las no browser**

Para utilizar as funções de criptografia, primeiro é preciso inicializar uma instância informando qual algoritmo será utilizado e a chave secreta.

Ex.:
```
const Crypto = Criptografia('aes-256-ctr', 'my$up3RuL7r4s3CR37k3y');
```

A partir desse momento, os métodos a seguir estarão disponíveis:

- hashString: cria o hash de uma string utilizando um algoritmo informado (caso não seja, utilizará por padrão o *sha512*)
  Obs.: também está exportado como **hashPassword** e **hashString512**, o qual sempre utilizará o *sha512*)
- criptografar: criptografa uma string
- descriptografar: descriptografa uma string

=============================================================================================================================================================================

# formatadores
Simple formatters (money, date, etc.), and also some utility functions

## Formatter functions
- calculateCurrentAge: calcules the difference (in years) between two dates. Accepts two parameters, entry (initial age) and final, being the second optional (default: current date)
- formatPhone (Brazil format only): formats 8 and 9 digits phones (with or without area code), adding dashes and parenthesis. Example: 11987654321 -> (11) 98765-4321
- replaceSpecialCharacters: replaces special characters by their respective ones
- firstCharToUpper: turns the first character of a word, or the first character in every word in a sentence, into uppercase. Currently it works only in *space-separated* words (commas before or after the space do not interfere)

## Session functions
The session storage functions were compiled into five simple functions, to make it easier to work with them and their data
- create: creates a session with the provided name
- get: gets the specified parameter's value
- set: stores the specified parameter's value. Requires two parameters, key and value
- remove: removes the specified parameter's value from session storage
- clear: accepts an optional *name* parameter, if specified it clears this parameter from the session storage (by running the previous *remove* function); if not, clears the entire session

## URL functions
- getQueryParams: return the query parameters in JSON format. Accepts an optional *query* param. If not informed, it will try to obtain them first from **window.location.search**, and if non existent, from **window.location.hash**

## Keyboard functions
- addKeysListener: adds an event listener to the browser to execute an action when the specified keys are pressed together. Requires two parameters, *keys* (which must be an array of characters or an string) and *callback* (function to be executed when the key combination is pressed)

## Utility functions
- generateRandomId: returns a random number; accepts an optional *multiplier* parameter
- ruleOfThreePercentage: calculates a percentage using the rule of three method; requires two parameters, *total* (what amount represents 100%) and *value* (from which will be inferred what percentage it represents)
- getRandomArrayElement: returns a random element from the provided array

## Cryptography functions
**Obs.: the cryptography functions work only in Node, therefore it's not currently possible to use them in a browser**

To utilize the cryptography functions, first an instance must be created informing which algorithm will be used and the secret key.

Ex.:
```
const Crypto = Criptografia('aes-256-ctr', 'my$up3RuL7r4s3CR37k3y');
```

From this point on, the following methods are available

- hashString: hashes a string using an informed algorithm (if not, utilizará por will default to *sha512*)
  Obs.: it's also exported as **hashPassword** and **hashString512**, the latter which will always use *sha512*)
- encrypt: encrypts a string
- decrypt: decrypts a string