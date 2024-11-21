import { useState } from 'react';

type UsePersistReturn<T> = [T | null, (val: T | null) => void];

function usePersist<T>(key:string, initVal:T | null):
UsePersistReturn<T> {
  const storageKey = "hooks:" + key;

  const getValue = ():T | null => {
    try {
      const item = window.localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : initVal;
    } catch (err) {
      console.log(err);
      return initVal;
    }
  }

  const [savedValue, setSavedValue] = useState<T | null>(getValue);

  const setValue = (val:T | null): void => {
    try {
      setSavedValue(val);
      window.localStorage.setItem(storageKey, JSON.stringify(val));
    } catch(err) {
      console.log(err);
    }
  }

  return [savedValue, setValue];
}

export default usePersist;