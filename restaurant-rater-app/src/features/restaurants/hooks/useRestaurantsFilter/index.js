import { useDispatch, useSelector } from 'react-redux';
import { RestaurantsFilterActions } from 'features/restaurants/actions';

function useRestaurantsFilter() {
  const { filter } = useSelector((state) => state.restaurantsFilter);
  const dispatch = useDispatch();

  const resetFilter = () => {
    dispatch(RestaurantsFilterActions.resetFilter());
  };

  const setFilter = (newFilter) => {
    dispatch(RestaurantsFilterActions.setFilter(newFilter));
  };

  return { filter, resetFilter, setFilter };
}

export default useRestaurantsFilter;
