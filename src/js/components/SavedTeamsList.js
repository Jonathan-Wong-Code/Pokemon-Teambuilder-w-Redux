import React from 'react';
import SavedTeamCell from './SavedTeamsCell';
import './../../styles/components/SavedTeamsList.css';

const SavedTeamsList = ({ savedTeams, handleRemoveTeam }) => {
  const renderTeamCell = () => savedTeams.map(team => {
    return (
      <SavedTeamCell 
        key={team.id} 
        team={team} 
        handleRemoveTeam={handleRemoveTeam}
      />
    );
  });

  return (
    <div className='saved-teams'>
      <ul className='saved-teams__list'>
        {renderTeamCell()}
      </ul>
    </div> 
  );
};

export default SavedTeamsList;