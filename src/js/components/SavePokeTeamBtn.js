import React from 'react';
import './../../styles/components/SavePokeTeamBtn.css';

const SavePokeTeamBtn = ({ toggleModal, type, pokeTeam }) => {
  const onButtonClick = () => {
    toggleModal();
  };

  const disabledStatus = pokeTeam.length < 6 ? true : false;

  return (
    <div className='save-team'>
      {pokeTeam.length !== 0 && (
        <button onClick={onButtonClick} className='save-team__btn btn' disabled={disabledStatus}>
          {type === 'create' ? 'Save Team' : 'Edit Team'}
        </button>
      )}
      <p className='save-team__text'> Search and pick 6 Pokemon to save. {window.innerWidth > 550 && <span>Currently {pokeTeam.length}/6.</span>} </p>
      {window.innerWidth < 550 && <p className='save-team__text'>Currently {pokeTeam.length}/6.</p>}
    </div>
  );
};

export default SavePokeTeamBtn;
