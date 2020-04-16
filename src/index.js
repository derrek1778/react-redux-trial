import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import allReducer from './reducer';



 //ACTION
 /**
  * An action would be any change that would modify the state
  * of an application, For example action increase_count would
  * be an action that would make a change in a state
  */
/* const increment = () => {
  return {
    type: 'INCREMENT'
  }
};
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}; */
//REDUCER
/**
 * A reducer defines what changes an action would make on the 
 * state of the application 
 */
/* const counter = (state=0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
  }
}; */

//STORE
/**
 * A store is a global container for holding all the 
 * states that will exisit within an application
 */
/* let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
 */
 //DISPATCH
 /**
  * A dispatches dispatches an action to the reducer
  */
/* store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement()); */

//  EXECUTION FLOW
/**
 * An action is created by the user -> the dispatcher picks up the action
 * and forwards the action to the appropriate reducer that would  update the state
 * as defined by the reducer and eventually the global state is updated/modified
 */

const store = createStore(
                          allReducer,
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
