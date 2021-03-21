import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useProfile from 'features/profile/hooks/useProfile';
import { ProfileActions } from 'features/profile/actions';

const useProfileEdit = () => {
  const dispatch = useDispatch();
  const { isUpdating } = useSelector((state) => state.profile);
  const { profile, refresh, isRefreshing, isLoading } = useProfile();

  const editProfile = (request) => {
    dispatch(ProfileActions.editProfile(request));
  };

  return { isUpdating, editProfile, profile, refresh, isRefreshing, isLoading };
};

export default useProfileEdit;
