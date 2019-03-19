import { shallow } from 'enzyme';
import React from 'react';
import CreateTeamPage from './../../components/CreateTeamPage';
import BuildTeamPage from './../../components/BuildPokeTeamPage';
describe("the unconnected CreamTeamPage component", () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<CreateTeamPage />);
  });

  it('Should render the BuildTeamPage component', () => {
    expect(wrapper.find('BuildTeamPage').length).toBe(1);
  });
});
