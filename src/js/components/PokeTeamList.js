import React from 'react';
import PokeTeamListItem from './PokeTeamListItem';
import EmptyTeamListItem from './EmptyTeamListItem';
import './../../styles/components/PokeTeamList.css';

const PokeTeamList = ({ pokeTeam, handleRemovePokemon }) => {
  const renderPokeTeam = () => { 
    return pokeTeam.length > 0 ? (
      pokeTeam.map(pokemon => {
        return (
          <PokeTeamListItem 
            key={pokemon.uniqueId} 
            pokemon={pokemon} 
            handleRemovePokemon={handleRemovePokemon}
          />
        );
      })) : null;
  };

  return (
    <section className='poke-team'>
      <ul className='poke-team__list'>
        {renderPokeTeam()}
      </ul>
    </section>
  );
};

export default PokeTeamList;
