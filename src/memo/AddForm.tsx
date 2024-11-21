import React, { useState } from 'react';
import usePersist from '../Persist';
import MemoData from './MemoData';

function AddForm() {
  const [memo, setMemo] = usePersist<MemoData[]>("memo", []);
  const [message, setMessage] = useState('');

  const doChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const doAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: MemoData = {
      message: message,
      created: new Date()
    }
    memo!.unshift(data);
    setMemo(memo!);
    window.location.reload();
  }

  return (
    <form onSubmit={doAction}>
      <div>
        <input type="text" onChange={doChange} value={message} required />
        <input type="submit" value="Add" />
      </div>
    </form>
  );
}

export default AddForm;