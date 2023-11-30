import { useState } from 'react';

const useConvertionHistory = () => {
  const [item, setItem] = useState<string[]>([]);

  const getLocalStorageItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (!item) setItem([]);
    else setItem(JSON.parse(item));
  };

  const setLocalStorageItem = (key: string, value: string) => {
    const item = localStorage.getItem(key);
    if (!item)
      localStorage.setItem(
        key,
        JSON.stringify([
          `From ${value} to other currencies(${new Date().toLocaleString()})`,
        ])
      );
    else
      localStorage.setItem(
        key,
        JSON.stringify([
          ...JSON.parse(item),
          `From ${value} to other currencies(${new Date().toLocaleString()})`,
        ])
      );
  };
  return { item, getLocalStorageItem, setLocalStorageItem };
};

export default useConvertionHistory;
