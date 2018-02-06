import { createSelector } from 'reselect';
import getAnimals from './getAnimals';
import getPresenceFilter from './getPresenceFilter';

export default createSelector([getAnimals, getPresenceFilter], (animals, presence) => {
  if(presence === 'present') return animals.reduce((previousValue, currentValue) => {
    if (currentValue.present) {
      return previousValue.concat(currentValue);
    } else {
      return previousValue;
    }
  }, []);
  if(presence === 'absent') return animals.reduce((previousValue, currentValue) => {
    if (!currentValue.present) {
      return previousValue.concat(currentValue);
    } else {
      return previousValue;
    }
  }, []);
  return animals;
});
