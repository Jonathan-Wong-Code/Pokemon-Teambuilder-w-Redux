import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from './../../components/SearchBar';

describe("the Searchbar Component", () => {
  let handlePokeSearch, wrapper;
  beforeEach(() => {
    handlePokeSearch = jest.fn();
    wrapper = shallow(<SearchBar handlePokeSearch={handlePokeSearch} />);
  });

  it('Should render the SearchBar component', () => {
    expect(wrapper.find(`[data-test='search-bar-component']`).length).toBe(1);
  });

  it('Should an input the user can type in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
