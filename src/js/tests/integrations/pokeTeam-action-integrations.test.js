import { storeFactory } from './../testutils';
import { addPokeTeam, deletePokeTeam, editPokeTeam, setSavedTeams } from './../../actions/pokeTeam';
import database from './../../firebase/firebase';
import pokeTeam from './../fixtures/pokeTeam';
import regeneratorRuntime from "regenerator-runtime";

const uid = 'test123';

describe('the addPokeTeam action creator', () => {
  let store;
  beforeEach(async (done) => {
    await database.ref(`test/${uid}`).set(pokeTeam.team3).then(() => done());
    const initialState = {
      savedTeams : {
        [pokeTeam.team3.id] : pokeTeam.team3
      },

      auth : {
        uid
      }
    };
    store = storeFactory(initialState);
  });

  it('Should add a pokemon to the redux store and firebase', async () => {
      const ref = await store.dispatch(addPokeTeam(pokeTeam.team1));
      const newState = store.getState();
     
      expect(newState.savedTeams).toEqual({
        [ref] : {
          ...pokeTeam.team1,
          id: ref
        }, 
        [pokeTeam.team3.id] : pokeTeam.team3
    });
  });

  it('should delete a poketeam from redux and firebase', async () => {
    await store.dispatch(deletePokeTeam(pokeTeam.team3.id));
    const newState = store.getState();
    expect(newState.savedTeams).toEqual({});
  });
})//end describe