import { SET_CATEGORIES } from '../actions';

const INITIAL_STATE = [];

const categories = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case SET_CATEGORIES:
    return [...state, ...payload];
  default:
    return state;
  }
};

export default categories;
