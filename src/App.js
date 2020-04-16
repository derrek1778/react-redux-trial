import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './action';

function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        Current counter value is : {counter}

      {isLogged ? <h3>Is a user logged in?</h3> : ' '}

      <div>
        <button onClick={()=>dispatch(increment(5))}>Increment + </button>
        <button onClick={()=>dispatch(decrement(5))}>Decrement - </button>
      </div>
      </header>
    </div>
  );
}

export default App;
