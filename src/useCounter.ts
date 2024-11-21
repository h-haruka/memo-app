import React, { useState } from 'react';

export default function useCounter():[number, ()=>void] {
  const [num, setNum] = useState(0);

  const count = () => {
    setNum(num + 1);
  }

  return [num, count];
}