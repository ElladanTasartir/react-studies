import { combineReducers } from 'redux';
// Função do rootReducer é combinar vários reducers

import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});
