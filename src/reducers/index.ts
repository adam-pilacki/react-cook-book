import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';

/**
 * For now only recipes reducer is here
 * but add here any other reducers that will be added in the future
 * (if there will be any future ;>)
 */

export default combineReducers({
  recipes: recipesReducer
});