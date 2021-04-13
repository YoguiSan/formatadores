import { gerarIdAleatorio } from './utils';

// eslint-disable-next-line import/prefer-default-export
export function adicionarListenerTeclas(keys, callback) {
  let listen = keys;

  if (typeof (keys) === 'string') {
    listen = keys.split('');
  }

  let pressedKeys;
  let matches = {};

  document.addEventListener('keydown', ({ key }) => {
    pressedKeys = pressedKeys || {};

    pressedKeys[key] = true;

    listen.map((keyToListen) => {
      if (pressedKeys[keyToListen]) {
        matches[keyToListen] = true;
      }
      return matches;
    });

    if (Object.keys(matches).length === listen.length) {
      pressedKeys = {};
      matches = {};
      return callback();
    }
  });

  document.addEventListener('keyup', ({ key }) => {
    if (pressedKeys[key]) {
      pressedKeys[key] = false;
      matches = {};
    }
  });

  const identifier = `listener-${gerarIdAleatorio()}`;
  if (!document.CustomListeners) {
    document.CustomListeners = {};
  }
  if (!document.CustomListeners[identifier]) {
    document.CustomListeners[identifier] = this;
  }

  return identifier;
}
