import usePersist from '../Persist';
import MemoData from './MemoData';
import Item from './Item';

function Memo() {
  const [memo, setMemo] = usePersist<MemoData[]>("memo", []);

  let data: JSX.Element[] = memo!.map((value,key)=> (
    <Item key={value.message} value={value} index={key + 1}/>
  ));

  return (
    <table className='memo' width={'100%'}>
      <tbody>{data}</tbody>
    </table>
  );
}

export default Memo;