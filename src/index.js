import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Components/Counter';
import store from './mobx/index';
import {Provider} from 'mobx-react';

ReactDOM.render(
  <Provider store = {store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
