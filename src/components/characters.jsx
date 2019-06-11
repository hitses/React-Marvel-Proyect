import React, {Component} from 'react';
import Character from './character';
import Axios from 'axios';
import {api_url, api_key, api_characters} from '../config';

class Characters extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
    };

    Axios.get(api_url + api_characters + api_key).then((resp) => {
      let charactersFromMarvel = resp.data.data.results;
      console.log(resp);
      this.setState({
        characters: charactersFromMarvel,
      });
    });
  };

  render(){
    if(this.state.characters){
      return <div className="characters">
        {this.state.characters.map((character, i) => <Character {...character} key = {i}></Character>)}
      </div>
    } else{
      return <div>
        <h2>Cargando personajes...</h2>
      </div>
    }
  }
}

export default Characters;