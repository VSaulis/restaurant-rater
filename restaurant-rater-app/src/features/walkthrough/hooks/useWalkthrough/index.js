import { useDispatch, useSelector } from 'react-redux';
import { WalkthroughActions } from 'features/walkthrough/actions';

const useWalkthrough = () => {
  const dispatch = useDispatch();
  const { isWalkthroughCompleted } = useSelector((state) => state.walkthrough);

  const completeWalkthrough = () => {
    dispatch(WalkthroughActions.completeWalkthrough());
  };

  return { completeWalkthrough, isWalkthroughCompleted };
};

export default useWalkthrough;
