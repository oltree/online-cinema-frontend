import { combineReducers } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

export const rootReducer = combineReducers({
  toastr: toastrReducer,
});
