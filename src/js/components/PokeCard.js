import React from 'react';
import axios from 'axios';
import './../../styles/components/PokeCard.css';

class PokeCard extends React.Component {
  _isMounted = false;
  
  constructor() {
    super();
    this.state = {
      currentPokemon : null
    }
  }
  
  async componentDidMount() {
    this._isMounted = true;
    try {
      if(this._isMounted) {
        const response = await axios.get(`${this.props.pokemon.url}`);
        await this.setState({currentPokemon : response.data});
      }
    } catch (error){
      throw error
    } 
  }

  onPokeCardClick = () => {
    this.props.handlePokeCardClick(this.state.currentPokemon);
  }

  onPokeCardKeyPress = (e) => {
    if(e.key ==='Enter') {
      this.props.handlePokeCardClick(this.state.currentPokemon);
    }
  }

  componentWillUnmount(){
    this._isMounted = false;
  }
  
  render() {
    if (!this.state.currentPokemon) return <div />
    
    if (this.state.currentPokemon.sprites.front_default){
      return (
        <li 
          onClick={this.onPokeCardClick} 
          tabIndex='0' 
          className='poke-card__item'   
          onKeyPress={this.onPokeCardKeyPress}
        >
        
          <div className='poke-card__img-box'>
            <img 
              src={this.state.currentPokemon.sprites.front_default} 
              alt={`A sprite image of ${this.state.currentPokemon.name}`}
            />
          </div>
          <p className='poke-card__name'>{this.state.currentPokemon.name}</p>
        </li>       
      ) 
    } else {
      return <React.Fragment />
    } 
  }
};

export default PokeCard;
