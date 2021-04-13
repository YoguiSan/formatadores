import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('testes de listeners de teclas', () => {
  test.todo('adiciona um listener de teclas informando um array de caracteres');
  test.todo('adiciona um listener de teclas informando uma string');
});
