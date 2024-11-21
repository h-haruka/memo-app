import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';

// 合計計算の関数
const total = (n: number): number => {
  let re = 0;
  for(let i = 0; i <= n; i++) {
    re += i;
  }
  return re;
};

// 消費税計算の関数
const tax = (n:number): number => {
  return Math.floor(n * 1.1);
};

// 数値を計算しメッセージを返す独自フック関数
function useCalc(num: number, func: (n: number) => number):[JSX.Element,(s:number)=> void] {
  const [msg, setMsg] = useState<JSX.Element>(<>default value: {num}</>);

  const setValue = (s: number): void => {
    let res = func(s);
    setMsg(<p>※{s}の結果は、{res}です。</p>);
  }

  return [msg, setValue];
}

// デフォルトのコンポーネント
function PlainMessage() {
  const [n, setN] = useState(0);
  const [msg, setCalc] = useCalc(0, (n) => n);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setN(+e.target.value);
    setCalc(+e.target.value);
  }

  return (
    <div>
      <hr />
      <h5>{msg}</h5>
      <input type="number" onChange={onChange} value={n} />
      <hr />
    </div>
  );
}

// 合計計算コンポーネント
function AlertMessage() {
  const [n, setN] = useState(0);
  const [msg, setCalc] = useCalc(0, total);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setN(+e.target.value);
    setCalc(+e.target.value);
  }

  return (
    <div className="alert">
      <h5>{msg}</h5>
      <input type="number" onChange={onChange} min="0" max="10000" value={n} />
    </div>
  );
}

// 消費税計算コンポーネント
function CardMessage() {
  const [n, setN] = useState(0);
  const [msg, setCalc] = useCalc(0, tax);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setN(+e.target.value);
    setCalc(+e.target.value);
  }

  return (
    <div className="card">
      <h5>{msg}</h5>
      <input type="range" onChange={onChange} min="0" max="10000" step="100" />
    </div>
  );
}

// Appコンポーネント
function App() {
  return (
    <div>
      <h1>React</h1>
      <div className="container">
        <h3>Hooks sample</h3>
        <PlainMessage />
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  );
}

export default App;