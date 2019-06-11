import React from 'react';
import {Link} from 'react-router-dom';


function comic(props){
  return <div className="cardComic">
    <Link to = {'/comics/' + props.id} className="comicName"><h1>{props.title}</h1></Link>
    <img className="comicImg" src={props.thumbnail.path + '.' + props.thumbnail.extension} alt={props.title}/>
  </div>
};

export default comic