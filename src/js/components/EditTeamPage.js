import React from 'react';
import BuildPokeTeamPage from './BuildPokeTeamPage';
import { editPokeTeam } from './../actions/pokeTeam';
import { connect } from 'react-redux';
const EditTeamPage = ({ editPokeTeam, editedTeam, history }) => {
  const handleEditTeam = (pokeTeam) => {
    editPokeTeam(pokeTeam);
  };

  return (
    <BuildPokeTeamPage 
      type='edit' 
      handleEditTeam={handleEditTeam} 
      pokeTeam={editedTeam}
      history={history}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  editPokeTeam : (pokeTeam) => dispatch(editPokeTeam(pokeTeam))
});

const mapStateToProps = (state, props) => ({
  editedTeam : state.savedTeams[props.match.params.id]
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTeamPage);
