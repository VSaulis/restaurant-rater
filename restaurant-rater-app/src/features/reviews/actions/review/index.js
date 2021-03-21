import { ReviewTypes } from 'features/reviews/types';
import { ReviewsClient } from 'api/clients';
import { FlashMessageService, NavigationService } from 'shared/services';

export function getReview(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: ReviewTypes.GET_REVIEW_START });
      const { result } = await ReviewsClient.getReview(id);
      dispatch({ type: ReviewTypes.GET_REVIEW, payload: { review: result } });
    } catch (exception) {
      dispatch({ type: ReviewTypes.GET_REVIEW_ERROR });
    }
  };
}

export function refreshReview(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: ReviewTypes.REFRESH_REVIEW_START });
      const { result } = await ReviewsClient.getReview(id);
      dispatch({
        type: ReviewTypes.REFRESH_REVIEW,
        payload: { review: result },
      });
    } catch (exception) {
      dispatch({ type: ReviewTypes.REFRESH_REVIEW_ERROR });
    }
  };
}

export function editReview(id, request) {
  return async (dispatch) => {
    try {
      dispatch({ type: ReviewTypes.EDIT_REVIEW_START });
      const { result } = await ReviewsClient.editReview(id, request);
      dispatch({
        type: ReviewTypes.EDIT_REVIEW,
        payload: { review: result },
      });
      FlashMessageService.showSuccess('Review is successfully updated');
      NavigationService.goBack();
    } catch (exception) {
      dispatch({ type: ReviewTypes.EDIT_REVIEW_ERROR });
    }
  };
}

export function addReview(request) {
  return async (dispatch) => {
    try {
      dispatch({ type: ReviewTypes.ADD_REVIEW_START });
      await ReviewsClient.addReview(request);
      dispatch({ type: ReviewTypes.ADD_REVIEW });
      FlashMessageService.showSuccess('Review is successfully added');
      NavigationService.goBack();
    } catch (exception) {
      dispatch({ type: ReviewTypes.ADD_REVIEW_ERROR });
    }
  };
}

export function deleteReview(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: ReviewTypes.DELETE_REVIEW_START });
      await ReviewsClient.deleteReview(id);
      dispatch({ type: ReviewTypes.DELETE_REVIEW, payload: { id } });
      FlashMessageService.showSuccess('Review is successfully deleted');
    } catch (exception) {
      dispatch({ type: ReviewTypes.DELETE_REVIEW_ERROR });
    }
  };
}
