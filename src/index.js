import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/index';
import Characters from './components/characters';
import DetailCharacter from './components/detailCharacter';
import Header from './components/header';
import Comics from './components/comics';
import DetailComic from './components/detailComics';


const router = (
  <Router>
    <Header>{Header}</Header>
    <Switch>
      <Route path = '/' component = {Index} exact/>
      <Route path = '/characters' component = {Characters} exact/>
      <Route path = '/characters/:id' component = {DetailCharacter} exact/>
      <Route path = '/comics/' component = {Comics} exact/>
      <Route path = '/comics/:id' component = {DetailComic} exact/>
    </Switch>
    {/* <Footer></Footer> */}
  </Router> 
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
