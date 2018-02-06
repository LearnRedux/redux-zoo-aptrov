import { RECEIVE_ANIMAL, BREAK_OUT, LOAD_SUCCESS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL: {
      const { name } = action;
      const index = state.findIndex((element) => element.name === name);
      if (index === -1) {
        return [...state, { name, present: true }]
      } else {
        const _state = state.slice(index, 0);
        return [ ..._state, { name, present: true } ]
      }
    }
    case BREAK_OUT: {
      const { name } = action;
      const index = state.findIndex((element) => element.name === name);
      if (index === -1) {
        return [ ...state, { name, present: false }]
      } else {
        const _state = state.slice(index, 0);
        return [ ..._state, { name, present: false }]
      }
    }
    case LOAD_SUCCESS: {
      const { animals } = action.payload;
      return [ ...animals ];
    }
    default:
      return state;
  }
};
