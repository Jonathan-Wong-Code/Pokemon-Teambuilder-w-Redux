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
      <p className='page-text'>Select 6 Pokemon below to save your team. Currently {pokeTeam.length}/6.</p>
    </div>
  );
};

export default SavePokeTeamBtn;
