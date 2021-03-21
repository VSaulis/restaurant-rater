import { CategoryTypes } from 'features/categories/types';
import { CategoriesClient } from 'api/clients';
import { FlashMessageService } from 'shared/services';

export function getCategory(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: CategoryTypes.GET_CATEGORY_START });
      const { result } = await CategoriesClient.getCategory(id);
      dispatch({ type: CategoryTypes.GET_CATEGORY, payload: { category: result } });
    } catch (exception) {
      dispatch({ type: CategoryTypes.GET_CATEGORY_ERROR });
    }
  };
}

export function refreshCategory(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: CategoryTypes.REFRESH_CATEGORY_START });
      const { result } = await CategoriesClient.getCategory(id);
      dispatch({ type: CategoryTypes.REFRESH_CATEGORY, payload: { category: result } });
    } catch (exception) {
      dispatch({ type: CategoryTypes.REFRESH_CATEGORY_ERROR });
    }
  };
}

export function editCategory(id, request) {
  return async (dispatch) => {
    try {
      dispatch({ type: CategoryTypes.EDIT_CATEGORY_START });
      const { result } = await CategoriesClient.editCategory(id, request);
      dispatch({ type: CategoryTypes.EDIT_CATEGORY, payload: { category: result } });
      FlashMessageService.showSuccess('Category is successfully updated');
    } catch (exception) {
      dispatch({ type: CategoryTypes.EDIT_CATEGORY_ERROR });
    }
  };
}

export function addCategory(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: CategoryTypes.ADD_CATEGORY_START });
      await CategoriesClient.addCategory(request);
      dispatch({ type: CategoryTypes.ADD_CATEGORY });
      FlashMessageService.showSuccess('Category is successfully added');
    } catch (exception) {
      dispatch({ type: CategoryTypes.ADD_CATEGORY_ERROR });
    }
  };
}

export function deleteCategory(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: CategoryTypes.DELETE_CATEGORY_START });
      await CategoriesClient.deleteCategory(id);
      dispatch({ type: CategoryTypes.DELETE_CATEGORY, payload: { id } });
      FlashMessageService.showSuccess('Category is successfully deleted');
    } catch (exception) {
      dispatch({ type: CategoryTypes.DELETE_CATEGORY_ERROR });
    }
  };
}
