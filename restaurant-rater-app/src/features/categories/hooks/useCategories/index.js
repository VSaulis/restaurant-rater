import { useDispatch, useSelector } from 'react-redux';
import { CategoriesActions } from 'features/categories/actions';
import { useInfinityLoadingList } from 'shared/hooks';

const useCategories = () => {
  const { categories, isLoading, isRefreshing, count } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const refreshAction = (request) => {
    dispatch(CategoriesActions.refreshCategories(request));
  };

  const loadMoreAction = (request) => {
    dispatch(CategoriesActions.getCategories(request));
  };

  const { loadMore, refresh } = useInfinityLoadingList({
    isLoading,
    isRefreshing,
    count,
    refreshAction,
    loadMoreAction,
  });

  return { categories, isLoading, isRefreshing, loadMore, refresh, count };
};

export default useCategories;
