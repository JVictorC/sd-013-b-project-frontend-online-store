import { SET_CATEGORIES } from '../actions'

const INITIAL_STATE = {
  categories: [],
}

const categories = (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (action.types) {
    case SET_CATEGORIES:
      return { }
    default:
      return state;
  }
}

export default categories;
