import React from 'react';
import {NavLink} from 'react-router-dom';

function header(props){
  return <div className="headerDiv">
    <div>
      <img className="headerImg" src="https://www.smashmexico.com.mx/wp-content/uploads/2018/03/Marvel-Comics-Mexico.png" alt="Logo Marvel"/>
    </div>
    <h1 className="title">LA ENCICLOPEDIA</h1>
    <ul>
      <li><NavLink className="link" activeClassName="is-active" to="/characters" exact><span>Personajes</span></NavLink></li>
      <li><NavLink className="link" activeClassName="is-active" to="/comics" exact>Cómics</NavLink></li>
    </ul>
  </div>
}

export default header;