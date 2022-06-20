import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incDecrement,incNumber} from './Actions/action';


function App() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h1>Welcome to the increment/decrement project</h1>
      <h3>Try It Out Once</h3>
      <a className='decrement' onClick={()=>dispatch(incDecrement())}> - </a>
      <input type="text" name='numberIncremnet' id='number' value={myState} readOnly />
      <a className='increment' onClick={()=>dispatch(incNumber())}> + </a>
    </div>
  );
}

export default App;
