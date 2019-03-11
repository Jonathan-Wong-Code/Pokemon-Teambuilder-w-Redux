import React from 'react';
import SavedTeamsList from './SavedTeamsList';
import './../../styles/components/SavedTeamsPage.css';
import { connect } from 'react-redux';

class SavedTeamsPage extends React.Component {
  _isMounted = false;

  constructor() {
    super();

    this.state = {
      savedTeams : {}
    };
  }

  renderResults = () => {
    return this.props.savedTeams.length === 0 ? (
        <p className='saved-teams__error'>No Teams Saved</p>    
    ) : (
      
      <SavedTeamsList 
        savedTeams={this.props.savedTeams} 
        handleRemoveTeam={this.handleRemoveTeam}
      />  
    )
  }

  render() {
    return (
      <section className='saved-teams-section'>
        <h2 className='saved-teams-section__heading'>My Saved Teams</h2>
        {this.renderResults()}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  savedTeams : Object.values(state.savedTeams)
})

export default connect(mapStateToProps)(SavedTeamsPage);
