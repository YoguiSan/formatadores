import { gerarIdAleatorio } from '../utils';

class MetaJsonService {
  constructor() {
    this.get = async (url) => fetch(`${url}?randomId=${gerarIdAleatorio()}`)
      .then((data) => data.json())
      .then((res) => res)
      .catch((error) => ({ error }));
  }
}

const Instance = new MetaJsonService();

export default Instance;
