import { combineReducers } from 'redux';
import menu from './menu';
import sites from './sites';

const rootReducer = combineReducers({
  menu,
  sites
});

export default rootReducer;
