import { mount } from 'enzyme';
import React from 'react';
import { Modal } from './../../components/Modal';
import pokemon from './../fixtures/pokemon';

describe('the unconnected modal component with no error', () => {
  let wrapper, error, handleTogglePokeModal, handleAddPokemon;

  beforeEach(() => {
    error = null;
    handleTogglePokeModal = jest.fn();
    handleAddPokemon = jest.fn();

    const defaultProps = {
      error,
      handleTogglePokeModal,
      handleAddPokemon,
      pokemon
    };

    wrapper = mount(<Modal {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the modal component', () => {
    expect(wrapper.find(`[data-test='modal-component']`).length).toBe(1);
  });

  it('Should close the Modal when the user clicks on the background', () => {
    wrapper.find(`[data-test='modal-component']`).simulate('click');
    expect(handleTogglePokeModal).toHaveBeenCalled();
  });

  it('Should not close the modal when the modal body is clicked', () => {
    wrapper.find(`[data-test='modal-body']`).simulate('click');
    expect(handleTogglePokeModal).not.toHaveBeenCalled();
  });

  it('Should close the Modal whe nthe user clicks the Cancel button', () => {
    wrapper.find(`[data-test='modal-cancel']`).simulate('click');
    expect(handleTogglePokeModal).toHaveBeenCalled();
  });

  it('Should have the correct src and alt tags on the img element', () => {
    const img = wrapper.find(`[data-test='modal-img']`);
    expect(img.prop('src')).toEqual(pokemon.sprites.front_default);
    expect(img.prop('alt')).toEqual(pokemon.name);
  });
});
