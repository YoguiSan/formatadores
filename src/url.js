export const separarParametrosUrl = (informedQuery) => {
  if (!informedQuery && window?.location?.search) {
    const params = new URLSearchParams(window?.location?.search);

    const parsedParams = {};

    for (const key of params.keys()) {
      parsedParams[key] = params.get(key);
    };

    return parsedParams;
  }

  const query = informedQuery || window?.location?.search || window?.location?.hash;

  const parsedQueries = {};
  if (query && typeof (query) === 'string') {
    const splitQuery = query.split('&');
    splitQuery.forEach((q, i) => {
      const spl = i === 0 ? q.replace('?', '').split('=') : q.split('=');
      const { 0: index, 1: value } = spl;
      parsedQueries[index] = value;
    });
  } else if (typeof (query) === 'object') {
    Object.keys(query).forEach((key) => {
      if (key.indexOf('#') === 0) {
        parsedQueries[key.replace('#', '').replace('/', '').replace('?', '')] = query[key];
      }
    });
  }
  return parsedQueries;
};

export const obterParametrosUrl = separarParametrosUrl;
