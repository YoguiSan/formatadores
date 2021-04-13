// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { adicionarListenerTeclas } from '..';

const App = () => (
  <>
    <h1>Teste</h1>
  </>
);

const teclas = ['a', 'b', 'c', 'd'];
const callback = () => console.log('combinação de teclas ativada');

adicionarListenerTeclas(teclas, callback);

export default App;
