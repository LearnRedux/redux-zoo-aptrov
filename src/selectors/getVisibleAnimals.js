export default state => {
  if(state.presenceFilter === 'present') return state.animals.reduce((previousValue, currentValue) => {
    if (currentValue.present) {
      return previousValue.concat(currentValue);
    } else {
      return previousValue;
    }
  }, []);
  if(state.presenceFilter === 'absent') return state.animals.reduce((previousValue, currentValue) => {
    if (!currentValue.present) {
      return previousValue.concat(currentValue);
    } else {
      return previousValue;
    }
  }, []);
  return state.animals;
}
