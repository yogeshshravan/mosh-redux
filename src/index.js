import store from './store'
import { bugAdded, bugResolved } from './actions'
import * as actions from './actionTypes'

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState())
})

store.dispatch(bugAdded("Bug 1"))
store.dispatch(bugResolved(1))

unsubscribe()

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1
  }
})

console.log(store.getState())


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
