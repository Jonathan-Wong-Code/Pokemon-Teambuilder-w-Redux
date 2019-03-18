import React from 'react';
import './../../styles/components/Modal.css';
import PokemonTypes from './PokemonTypes';
import ConfirmSave from './ConfirmSave';

class Modal extends React.Component{
  constructor(){
    super();

    this.pokeModalButton = React.createRef();
  }

  componentDidMount (){
    this.pokeModalButton.current.focus();
  }
  

  renderTypes = () => this.props.pokemon.types.map(type => {
    return <PokemonTypes type={type} key={type.type.name} />;
  });
  
  renderAbilities = () => this.props.pokemon.abilities.map(ability => {
    return (
      <li 
        className='modal__ability' 
        key={ability.ability.name}
      > 
        {ability.ability.name} 
      </li>    
    );
  });

  renderStats = () => this.props.pokemon.stats.map(stat => (
    <li key={stat.stat.url}>
      <span className='modal__stat-name'>
        { stat.stat.name }:
      </span> {stat.base_stat}
    </li>
  ));

  render() {
    return (
      <div className='modal__background' onClick={this.props.handleModalCancel}>
        <div className='modal__body' onClick={(e) => e.stopPropagation()}>
          <div className='modal__img-box'>
            <img 
              src={this.props.pokemon.sprites.front_default} 
              alt={this.props.pokemon.name} 
              className='modal__img'
            />
          </div>
          <h2 className='modal__name'>{this.props.pokemon.name}</h2>
          <ul className='modal__attributes'>
            <li className='modal__types'>
              <span className='modal__stat-name'>type: </span>
              {this.renderTypes()}
            </li>
      
            <li className='modal__stats'>
              <ul className='modal__stats-list'>{this.renderStats()}</ul>
            </li>
  
            <li className='modal__abilities'>
              <span className='modal__stat-name modal__ability-tag'>abilities: </span>
              <ul className='modal__abilities-list'>
                {this.renderAbilities()}
              </ul>
            </li>
          </ul>
          {this.props.error && <p className='modal__error'>{this.props.error}</p>}
          <div className='modal__buttons'>
            <button 
              onClick={this.props.handleAddPokemon} 
              className='btn modal__btn'
              ref={this.pokeModalButton}
            >
               Save to team
            </button>
            <button 
              onClick={this.props.handleTogglePokeModal} 
              className='btn modal__btn'
            >
               Cancel
            </button>
          </div>
        </div>
      </div>   
    );
  }
};

export default Modal;
