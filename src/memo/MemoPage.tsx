import Memo from './Memo';
import AddForm from './AddForm';
import DelForm from './DelForm';

function MemoPage() {
  return (
    <div>
      <div className="alert">
        <AddForm />
        <DelForm />
      </div>
      <Memo />
    </div>
  );
}

export default MemoPage;