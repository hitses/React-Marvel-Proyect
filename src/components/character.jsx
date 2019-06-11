import React from 'react';
import {Link} from 'react-router-dom';


function character(props){
  return <div className="cardCharacter">
    <Link to = {'/characters/' + props.id} className="nameCharacter"><h1>{props.name}</h1></Link>
    <img className="characterImg" src={props.thumbnail.path + '.' + props.thumbnail.extension} alt={props.name}/>
  </div>
};

export default character