import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import sumReducer from './reducer/sumReducer';


const store = createStore(sumReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

