import React from 'react';
import { connect } from 'react-redux';
import BuildPokeTeamPage from './BuildPokeTeamPage';
import database from './../firebase/firebase';
import { addPokeTeam } from './../actions/pokeTeam';

const CreateTeamPage = ({ history, addPokeTeam }) => {
  const handleAddTeam = (pokeTeam) => {
    addPokeTeam(pokeTeam);
  };
 
  return (
    <BuildPokeTeamPage 
      type='create' 
      handleAddTeam={handleAddTeam}
      history={history}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPokeTeam : (pokeTeam) => dispatch(addPokeTeam(pokeTeam))
});

export default connect(null, mapDispatchToProps)(CreateTeamPage);
