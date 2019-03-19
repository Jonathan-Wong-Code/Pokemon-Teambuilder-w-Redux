import React from 'react';
import SavedTeamCell from './SavedTeamsCell';

const SavedTeamsList = ({ savedTeams }) => {
  const renderTeamCell = () => savedTeams.map(team => {
    return (
      <SavedTeamCell 
        key={team.id} 
        team={team} 
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
