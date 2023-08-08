const createCache = () => {
    interface CacheType {
        [id : string]: any;    
        value?: string;
    }
  const cache : CacheType = {value: "value"};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};