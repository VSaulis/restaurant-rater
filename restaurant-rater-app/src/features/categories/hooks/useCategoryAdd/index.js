import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CategoryActions } from 'features/categories/actions';

const useCategoryAdd = () => {
  const dispatch = useDispatch();
  const { isAdding } = useSelector((state) => state.category);

  const addCategory = (request) => {
    dispatch(CategoryActions.addCategory(request));
  };

  return { isAdding, addCategory };
};

export default useCategoryAdd;
