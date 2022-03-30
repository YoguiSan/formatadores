/**
 * @jest-environment jsdom
 */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

xdescribe('teste do componente App', () => {
  /*
  const wrapper = shallow(<App />);

  xtest('renderização', () => {
    expect(wrapper.contains(<h1>Ambiente de teste do app Formatadores</h1>)).toEqual(true);
  });
  */
  test.todo('renderização');
});
