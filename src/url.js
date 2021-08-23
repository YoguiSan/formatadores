// eslint-disable-next-line import/prefer-default-export
export const separarParametrosUrl = (query = window.location.search) => {
  const parsedQueries = {};
  if (query) {
    const splitQuery = query.split('&');
    splitQuery.forEach((q, i) => {
      const spl = i === 0 ? q.replace('?', '').split('=') : q.split('=');
      const { 0: index, 1: value } = spl;
      parsedQueries[index] = value;
    });
  }
  return parsedQueries;
};
