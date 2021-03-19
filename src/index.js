import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router } from 'react-router-dom';


import store from './redux/store'
import {Provider} from 'react-redux'
 

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
    </Provider>,
  document.getElementById('root')
);    
     
  
reportWebVitals();
