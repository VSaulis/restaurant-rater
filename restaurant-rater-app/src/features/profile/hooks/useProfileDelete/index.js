import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ProfileActions } from 'features/profile/actions';

const useProfileDelete = () => {
  const dispatch = useDispatch();
  const { isDeleting } = useSelector((state) => state.profile);

  const deleteProfile = () => {
    dispatch(ProfileActions.deleteProfile());
  };

  return { isDeleting, deleteProfile };
};

export default useProfileDelete;
