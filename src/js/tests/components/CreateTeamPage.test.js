import { shallow } from 'enzyme';
import React from 'react';
import { CreateTeamPage } from './../../components/CreateTeamPage';
import BuildTeamPage from './../../components/BuildPokeTeamPage';
import regeneratorRuntime from 'regenerator-runtime';


describe("the unconnected CreamTeamPage component", () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<CreateTeamPage />);
  });

  it('Should render the BuildTeamPage component with proper type prop', () => {
    expect(wrapper.find(BuildTeamPage).length).toBe(1);
    expect(wrapper.find(BuildTeamPage).prop('type')).toBe('create');
  });


});
