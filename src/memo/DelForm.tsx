import React, { useState } from 'react';
import usePersist from '../Persist';
import MemoData from './MemoData';

function DelForm() {
  const [memo, setMemo] = usePersist<MemoData[]>("memo", []);
  const [num, setNum] = useState(0);

  const doChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setNum(+e.target.value);
  }

  const doAction = (e: React.FormEvent<HTMLFormElement>) => {
    let res = memo?.filter((item, key)=> {
      return key != num;
    });
    setMemo(res || []);
    setNum(0);
  }

  let items = memo?.map((value, key)=> (
    memo ?
    <option key={key} value={key}>
      {value.message.substring(0,10)}
    </option>
    :
    <option>no-data</option>
  ));

  return (
    <form onSubmit={doAction}>
      <div>
        <select onChange={doChange} defaultValue="-1">
          {items}
        </select>
        <input type="submit" value="Del" />
      </div>
    </form>
  );
}

export default DelForm;