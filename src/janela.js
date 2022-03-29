/* eslint-disable import/prefer-default-export */

export const obterTamanhoElemento = (elem = window?.document?.documentElement) => {
  const {
    scrollWidth: width,
    scrollHeight: height,
  } = elem;

  return {
    width,
    height,
  };
};

export const obterPosicaoRolagem = (elem = window?.document?.documentElement) => {
  const {
    width: widthScreen,
    height: heightScreen,
  } = obterTamanhoElemento(window?.document?.documentElement);

  const {
    width: widthElement,
    height: heightElement,
  } = obterTamanhoElemento(elem);

  if (elem) {
    const scrollX = elem.scrollLeft;
    const scrollY = elem.scrollTop;

    return {
      scrollX,
      scrollY,
      x: scrollX,
      y: scrollY,
      horizontal: scrollX,
      vertical: scrollY,
      widthElement,
      heightElement,
      widthScreen,
      heightScreen,
    };
  }

  return {};
};
