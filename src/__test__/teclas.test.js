import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { adicionarListenerTeclas } from '../teclas';

Enzyme.configure({ adapter: new Adapter() });

describe('testes de listeners de teclas', () => {
  test('adiciona um listener de teclas informando um array de caracteres', () => {
    const teclas = ['t', 'e', 'c', 'l', 'a', 's'];
    const callback = () => console.log(teclas);

    const identifier = adicionarListenerTeclas(teclas, callback);
    expect(identifier).toBeDefined();
  });
  test('adiciona um listener de teclas informando uma string', () => {
    const teclas = 'teclas';
    const callback = () => console.log(teclas);

    const identifier = adicionarListenerTeclas(teclas, callback);
    expect(identifier).toBeDefined();
  });
});
