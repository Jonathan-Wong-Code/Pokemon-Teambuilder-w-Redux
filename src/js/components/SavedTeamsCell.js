import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePokeTeam } from './../actions/pokeTeam';

const SavedTeamsCell = ({ team, deletePokeTeam }) => {
  const renderPokemonImg = () => {
    return team.pokemon.map(pokemon => {
      return (
        <li key={pokemon.uniqueId} className='team-cell__img-item'>
          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            className='team-cell__img' 
          />
        </li>
      );
    });
  };

  const onDeleteClick = () => {
    deletePokeTeam(team.id);
  };

  if (!team.pokemon) return <div />;
  return (
    <li className='team-cell'>
      <ul className='team-cell__img-list'>
        {renderPokemonImg()}
      </ul>

      <h2 className='team-cell__heading'>{team.name}</h2>
      <p className='team-cell__createdAt'>
        Created: {moment(team.createdAt).format('MMM Do YYYY')}
      </p>
      <p className='team-cell__description'>{team.description}</p>
      <div className='team-cell__buttons '>
        <Link to={`/edit/${team.id}`} className='btn team-cell__button'>
          Edit
        </Link>
        <button onClick={onDeleteClick} className='btn team-cell__button'>Delete</button>
      </div>
    </li>
  );
};  

const mapDispatchToProps = (dispatch) => ({
  deletePokeTeam : (id) => dispatch(deletePokeTeam(id))
});

export default connect(null, mapDispatchToProps)(SavedTeamsCell);
