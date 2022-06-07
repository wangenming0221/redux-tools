import { useDispatch, useSelector } from 'react-redux';
import { add, subAsync, pus, del } from './store/modules/counter';

function App() {
  const dispatch = useDispatch();
  const { count, list } = useSelector(state => state.counter);

  const handleAdd = () => {
    dispatch(add());
  };

  const handleSub = () => {
    dispatch(subAsync());
  };

  const handlePus = () => {
    dispatch(pus());
  };

  return (
    <div className="App">
      <ul>
        <li>{count}</li>
        <li><button onClick={()=>handleAdd()}>增加</button></li>
        <li><button onClick={()=>handleSub()}>减少</button></li>
        <hr />
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={()=>dispatch(del(index))} key={index}>{item}</li>
            })
          }
        </ul>
      </ul>
      <li><button onClick={()=>handlePus()}>数组增加</button></li>
    </div>
  );
}

export default App;
