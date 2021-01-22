export const create = (name) => {
  sessionStorage.SessionName = name;
  return sessionStorage;
};

export const get = (name) => {
  const item = sessionStorage.getItem(name);
  return item;
};

export const set = (name, value) => {
  sessionStorage.setItem(name, value);
  return sessionStorage.getItem(name);
};

export const remove = (name) => {
  sessionStorage.removeItem(name);
  return sessionStorage;
};

export const clear = (name) => {
  if (name) {
    return remove(name);
  }
  sessionStorage.clear();

  return sessionStorage;
};
