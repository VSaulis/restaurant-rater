import { CategoriesTypes } from 'features/categories/types';
import { CategoriesClient } from 'api/clients';

export function getCategories(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: CategoriesTypes.GET_CATEGORIES_START });
      const { result, count } = await CategoriesClient.getCategories(request);
      dispatch({ type: CategoriesTypes.GET_CATEGORIES, payload: { categories: result, count } });
    } catch (exception) {
      dispatch({ type: CategoriesTypes.GET_CATEGORIES_ERROR });
    }
  };
}

export function refreshCategories(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: CategoriesTypes.REFRESH_CATEGORIES_START });
      const { result, count } = await CategoriesClient.getCategories(request);
      dispatch({ type: CategoriesTypes.REFRESH_CATEGORIES, payload: { categories: result, count } });
    } catch (exception) {
      dispatch({ type: CategoriesTypes.REFRESH_CATEGORIES_ERROR });
    }
  };
}
