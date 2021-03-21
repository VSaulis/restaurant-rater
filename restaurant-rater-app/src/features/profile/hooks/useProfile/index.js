import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ProfileActions } from 'features/profile/actions';

const useProfile = () => {
  const dispatch = useDispatch();
  const { profile, isLoading, isRefreshing } = useSelector((state) => state.profile);

  const refresh = () => {
    dispatch(ProfileActions.refreshProfile());
  };

  return { profile, isLoading, isRefreshing, refresh };
};

export default useProfile;
