import React from 'react';
import {Link} from 'react-router-dom';


function character(props){
  return <div>
    <Link to = {'/characters/' + props.id}><h1>{props.name}</h1></Link>
    <img src={props.thumbnail.path + '.jpg'} alt={props.name}/>
  </div>
};

export default character