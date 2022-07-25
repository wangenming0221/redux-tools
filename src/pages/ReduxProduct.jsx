import { useDispatch, useSelector } from 'react-redux';
import { add, subAsync, pus, del } from '../store/modules/counter';
import { Button } from 'antd';

export default function ReduxProduct() {
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
        <li><Button onClick={()=>handleAdd()}>增加</Button></li>
        <li><Button onClick={()=>handleSub()}>减少</Button></li>
        <hr />
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={()=>dispatch(del(index))} key={index}>{item}</li>
            })
          }
        </ul>
      </ul>
      <li><Button onClick={()=>handlePus()}>数组增加</Button></li>
    </div>
  );
};
