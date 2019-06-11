import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/index';
import Characters from './components/characters';
import Detail from './components/detail';
import Header from './components/header';

const router = (
  <Router>
    <Header>{Header}</Header>
    <Switch>
      <Route path = '/' component = {Index} exact/>
      <Route path = '/characters' component = {Characters} exact/>
      <Route path = '/characters/:id' component = {Detail} exact/>
    </Switch>
    {/* <Footer></Footer> */}
  </Router> 
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
