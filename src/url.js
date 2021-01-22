export const separarParametrosUrl = (query) => {
  const parsedQueries = {};
  if (query) {
    const splitQuery = query.split('&');
    splitQuery.map((q, i) => {
      const spl = i === 0 ? q.replace('?', '').split('=') : q.split('=');
      const { 0: index, 1: value } = spl;
      parsedQueries[index] = value;
    });
  }
  return parsedQueries;
};
