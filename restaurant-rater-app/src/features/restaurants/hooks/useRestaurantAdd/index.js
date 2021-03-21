import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RestaurantActions } from 'features/restaurants/actions';

const useRestaurantAdd = () => {
  const dispatch = useDispatch();
  const { isAdding } = useSelector((state) => state.restaurant);

  const addRestaurant = (request) => {
    dispatch(RestaurantActions.addRestaurant(request));
  };

  return { isAdding, addRestaurant };
};

export default useRestaurantAdd;
