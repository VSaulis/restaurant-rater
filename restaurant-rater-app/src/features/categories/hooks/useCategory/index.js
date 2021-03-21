import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryActions } from 'features/categories/actions';

const useCategory = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { category, isLoading, isRefreshing } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(CategoryActions.getCategory(id));
  }, [dispatch, id]);

  const refresh = () => {
    dispatch(CategoryActions.refreshCategory(id));
  };

  return { category, isLoading, isRefreshing, refresh };
};

export default useCategory;
