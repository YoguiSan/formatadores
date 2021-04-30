class MetaJsonService {
  constructor() {
    this.get = async (url) => fetch(url)
      .then((data) => data.json())
      .then((res) => res)
      .catch((error) => error);
  }
}

const Instance = new MetaJsonService();

export default Instance;
