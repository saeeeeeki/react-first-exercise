import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import todo from './reducers';
import App from './components/App';
import {addTodo} from "./actions";

let store = createStore(todo);

store.dispatch(addTodo('aaa'));
store.dispatch(addTodo('bbb'));

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
});
