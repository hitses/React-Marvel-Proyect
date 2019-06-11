import React, {Component} from 'react';
import Axios from 'axios';
import {api_url, api_key, api_characters} from '../config';

class DetailCharacter extends Component{
  constructor(props){
    super(props);
    this.state = {
      character: null,
    };

    this.characterId = props.match.params.id;

    Axios.get(api_url + api_characters + '/' + this.characterId + api_key).then((resp) => {
      let character = resp.data.data.results[0];
      this.setState({
        character,
      });
    });
  };

  render(){
    if(this.state.character){
      return <div className="detailCharacter">
        <h1 className="detailCharacterName">{this.state.character.name}</h1>
        <div className="detailCharacterImg">
          <img src={this.state.character.thumbnail.path + '.jpg'} alt={this.state.character.name} className="detailCharacterImg"/>
        </div>
        <p className="detailCharacterDescription">{this.state.character.description}</p>
        
      </div>
    } else{
      return <div>
        <h2>Cargando personaje...</h2>
      </div>
    };
  };
};

export default DetailCharacter;