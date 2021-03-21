import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RestaurantActions } from 'features/restaurants/actions';

const useRestaurantDelete = () => {
  const dispatch = useDispatch();
  const { restaurant, isLoading, isDeleting } = useSelector((state) => state.restaurant);

  const deleteRestaurant = (id) => {
    dispatch(RestaurantActions.deleteRestaurant(id));
  };

  return { restaurant, isLoading, isDeleting, deleteRestaurant };
};

export default useRestaurantDelete;
