import { getCategories } from '../../services/api';

export const SET_CATEGORIES = 'SET_CATEGORIES;';

const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });

export const fetchCategories = () => async (dispatch) => {
  const categories = await getCategories();
  dispatch(setCategories(categories));
};
