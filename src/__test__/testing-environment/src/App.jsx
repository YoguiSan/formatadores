import React, { useEffect, useState } from 'react';
import { adicionarListenerTeclas, Criptografia, obterPosicaoRolagem, separarParametrosUrl } from 'formatadores';

import './App.css';

const App = () => {
  const teclas = ['a', 'b', 'c', 'd'];
  const callback = () => console.log('combinação de teclas ativada');
  const [scroll, setScroll] = useState({}); 
  
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scr = obterPosicaoRolagem();
  
      setScroll(scr);
    });

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
  
    adicionarListenerTeclas(teclas, callback);
  }, []);


  return (
    <>
      <h1 id="title">Ambiente de teste do app Formatadores</h1>
      <div className="bottom">
        <p>
          Altura da janela: {scroll.heightScreen} px
        </p>
        <p>
          Largura da janela: {scroll.widthScreen} px
        </p>
        <p>
          Rolagem X: {scroll.x} px
        </p>
        <p>
          Rolagem Y: {scroll.y} px
        </p>
      </div>
    </>
  )
};

export default App;
