import { combineReducers } from 'redux';
// Função do rootReducer é combinar vários reducers

import auth from './auth/reducer';

export default combineReducers({
  auth,
});
