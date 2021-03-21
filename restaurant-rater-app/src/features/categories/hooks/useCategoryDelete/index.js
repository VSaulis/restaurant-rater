import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CategoryActions } from 'features/categories/actions';

const useCategoryDelete = () => {
  const dispatch = useDispatch();
  const { category, isLoading, isDeleting } = useSelector((state) => state.category);

  const deleteCategory = (id) => {
    dispatch(CategoryActions.deleteCategory(id));
  };

  return { category, isLoading, isDeleting, deleteCategory };
};

export default useCategoryDelete;
