import React from 'react';
import {Link} from 'react-router-dom';


function comic(props){
  return <div className="cardComic">
    <Link to = {'/comics/' + props.id}><h1>{props.title}</h1></Link>
    <img className="comicImg" src={props.thumbnail.path + '.jpg'} alt={props.title}/>
  </div>
};

export default comic