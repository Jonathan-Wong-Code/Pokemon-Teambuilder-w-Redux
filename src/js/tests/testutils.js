import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../reducers/';
import thunk from 'redux-thunk';

export const storeFactory = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};


// export const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test='${val}']`);
// };

// export const checkProps = (component, conformingProps) =>{
//   const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
//   expect(propError).toBeUndefined();
// };
