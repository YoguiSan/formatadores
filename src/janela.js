/* eslint-disable import/prefer-default-export */
export const obterPosicaoRolagem = (elem = window?.document?.body) => {
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
    };
  }

  return {};
};
