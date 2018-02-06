export const RECEIVE_ANIMAL = 'zoo/RECEIVE_ANIMAL';
export const BREAK_OUT = 'zoo/BREAK_OUT';

export const receiveAnimal = (name) => ({ type: RECEIVE_ANIMAL, name });

export const breakOut = (name) => ({ type: BREAK_OUT, name });
