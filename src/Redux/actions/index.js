import { getCategories } from '../../services/api';

export const SET_CATEGORIES = 'SET_CATEGORIES;';

const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });

export const fetchCategories = () => (dispatch) => {
  const categories = getCategories().then((response) => response.json());
  dispatch(setCategories(categories));
};
