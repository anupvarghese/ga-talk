import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import { createStore } from 'redux';

const store = createStore(reducer);

render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('app'));
