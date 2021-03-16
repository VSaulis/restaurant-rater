import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RestaurantActions } from 'features/restaurants/actions';

const useRestaurant = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { restaurant, isLoading, isLoaded } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(RestaurantActions.getRestaurant(id));
  }, [id]);

  return { restaurant, isLoading, isLoaded };
};

export default useRestaurant;
