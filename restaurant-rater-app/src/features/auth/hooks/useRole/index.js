import { useSelector } from 'react-redux';
import { Roles } from 'shared/constant';

const useRole = () => {
  const { role } = useSelector((state) => state.auth);

  return {
    role,
    isAdmin: role === Roles.Admin,
    isOwner: role === Roles.Owner,
    isRegularUser: role === Roles.RegularUser,
  };
};

export default useRole;
