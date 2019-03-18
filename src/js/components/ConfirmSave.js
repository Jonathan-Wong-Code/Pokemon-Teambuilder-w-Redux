import React from 'react';
import './../../styles/components/ConfirmSave.css';

const ConfirmSave = ({ pokemon, handleToggleSaveModal }) => {
  return (
    <div className='modal__background'>
      <div className='modal__body confirm-save__modal'>
        <p>Saved <span className='confirm-save__name'>{pokemon.name}</span> to team</p>
        <button onClick={handleToggleSaveModal} className='btn confirm-save__btn'>Close</button>
      </div>
    </div>
    
  );
};

export default ConfirmSave;
