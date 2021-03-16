import { useSelector } from 'react-redux';

function usePermissions() {
  const { permissions } = useSelector((state) => state.auth);

  const hasPermission = (permission) => {
    return permissions.includes(permission);
  };

  return { permissions, hasPermission };
}

export default usePermissions;
