import React, {Component} from 'react';
import Axios from 'axios';
import {api_url, api_key, api_comics} from '../config';

class DetailComic extends Component{
  constructor(props){
    super(props);
    this.state = {
      comic: null,
    };

    this.comicId = props.match.params.id;

    Axios.get(api_url + api_comics + '/' + this.comicId + api_key).then((resp) => {
      let comic = resp.data.data.results[0];
      this.setState({
        comic,
      });
    });
  };

  render(){
    if(this.state.comic){
      return <div className="detailComic">
        <h1 className="nameComic">{this.state.comic.name}</h1>
        <img src={this.state.comic.thumbnail.path + '.jpg'} alt={this.state.comic.name}/>
        <p>{this.state.comic.description}</p>
      </div>
    } else{
      return <div>
        <h2>Cargando cómic...</h2>
      </div>
    };
  };
};

export default DetailComic;