import React from 'react';
import { adicionarListenerTeclas, Criptografia, obterPosicaoRolagem, separarParametrosUrl } from 'formatadores';

const App = () => {
  const teclas = ['a', 'b', 'c', 'd'];
  const callback = () => console.log('combinação de teclas ativada');
  
  const scroll = obterPosicaoRolagem()
  console.log(scroll)
 
  let Crypto;

  try {
    Crypto = Criptografia(
      'aes-256-ctr',
      'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3',
    );

    console.log('Crypto module enabled: ', Crypto.moduleEnabled);
  } catch (error) {
    console.error(error);
  }
  
  console.log(separarParametrosUrl().keys())

  adicionarListenerTeclas(teclas, callback);

  return (
    <>
      <h1>Ambiente de teste do app Formatadores</h1>
    </>
  )
};

export default App;
