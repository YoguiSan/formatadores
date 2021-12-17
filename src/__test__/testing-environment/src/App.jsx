import React from 'react';
// import Crypto from 'crypto-browserify';
import { adicionarListenerTeclas, Criptografia } from 'formatadores';

const App = () => {
  const teclas = ['a', 'b', 'c', 'd'];
  const callback = () => console.log('combinação de teclas ativada');

  let Crypto;
  try {
    Crypto = Criptografia(
      'aes-256-ctr',
      'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3',
      // Crypto,
    );
  } catch (error) {
    console.log(error);
  }
  
  adicionarListenerTeclas(teclas, callback);

  const stringToEncrypt = 'stringToBeCryptographed';
  const encryptedString = Crypto.criptografar(stringToEncrypt);
  const decryptedString = Crypto.descriptografar(stringToEncrypt);

  return (
    <>
      <h1>Ambiente de teste do app Formatadores</h1>
      <p>
        String a criptografar: {stringToEncrypt}
      </p>
      <p>
        String criptografada: {encryptedString}
      </p>
      <p>
        String descriptografada: {decryptedString}
      </p>
    </>
  )
};

export default App;
