import name from './name';
import presenceFilter from './presenceFilter';
import animals from './animals';
import { combineReducers } from 'redux';

export {
  name,
  presenceFilter,
  animals,
}

export default combineReducers({
  name,
  presenceFilter,
  animals,
});
