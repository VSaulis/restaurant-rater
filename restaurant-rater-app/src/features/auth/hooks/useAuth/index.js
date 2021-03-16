import { useSelector } from 'react-redux';

function useAuth() {
  const { isLogged } = useSelector((state) => state.auth);
  return { isLogged };
}

export default useAuth;
