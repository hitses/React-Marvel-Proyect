import React, {Component} from 'react';
import Comic from './comic';
import Axios from 'axios';
import {api_url, api_key, api_comics} from '../config';

class Comics extends Component{
  constructor(props){
    super(props);
    this.state = {
      comics: [],
    };

    Axios.get(api_url + api_comics + api_key).then((resp) => {
      let comicsFromMarvel = resp.data.data.results;
      console.log(resp);
      this.setState({
        comics: comicsFromMarvel,
      });
    });
  };

  render(){
    if(this.state.comics){
      return <div className="comics">
        {this.state.comics.map((comic, i) => <Comic {...comic} key = {i}></Comic>)}
      </div>
    } else{
      return <div>
        <h2>Cargando cómics...</h2>
      </div>
    }
  }
}

export default Comics;