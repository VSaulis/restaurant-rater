import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RestaurantActions } from 'features/restaurants/actions';
import useRestaurant from 'features/restaurants/hooks/useRestaurant';

const useRestaurantEdit = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.restaurant);
  const { restaurant, refresh, isRefreshing, isLoading } = useRestaurant({ id });

  const editRestaurant = (request) => {
    dispatch(RestaurantActions.editRestaurant(id, request));
  };

  return { isUpdating, editRestaurant, restaurant, refresh, isRefreshing, isLoading };
};

export default useRestaurantEdit;
