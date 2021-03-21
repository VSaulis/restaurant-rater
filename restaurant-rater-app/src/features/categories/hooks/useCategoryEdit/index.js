import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CategoryActions } from 'features/categories/actions';
import useCategory from 'features/categories/hooks/useCategory';

const useCategoryEdit = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.category);
  const { category, refresh, isRefreshing, isLoading } = useCategory({ id });

  const editCategory = (request) => {
    dispatch(CategoryActions.editCategory(id, request));
  };

  return { isUpdating, editCategory, category, refresh, isRefreshing, isLoading };
};

export default useCategoryEdit;
