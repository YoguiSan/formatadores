export const obterTamanhoElemento = (elem = window?.document?.documentElement) => {
  const element = typeof (elem) === 'string'
    ? document.getElementById(elem)
    : elem;

  if (element) {
    const {
      scrollWidth: width,
      scrollHeight: height,
    } = element;

    return {
      width,
      height,
    };
  }

  return {};
};

export const obterPosicaoRolagem = (elem) => {
  const result = {};

  const {
    width: widthWindow,
    height: heightWindow,
  } = obterTamanhoElemento(window?.document?.documentElement);

  const scrollXWindow = window?.document?.documentElement?.scrollLeft;
  const scrollYWindow = window?.document?.documentElement?.scrollTop;

  result.widthWindow = widthWindow;
  result.heightWindow = heightWindow;

  result.scrollXWindow = scrollXWindow;
  result.scrollYWindow = scrollYWindow;

  if (elem) {
    const element = typeof (elem) === 'string'
      ? document.getElementById(elem)
      : elem;

    const {
      width: widthElement,
      height: heightElement,
    } = obterTamanhoElemento(element);

    const scrollX = scrollXWindow - element.offsetLeft;
    const scrollY = scrollYWindow - element.offsetTop;

    result.scrollX = scrollX;
    result.scrollY = scrollY;
    result.widthElement = widthElement;
    result.heightElement = heightElement;
  }
  return result;
};

export const obterRolagemJanela = () => obterPosicaoRolagem();
