import { WalkthroughTypes } from 'features/walkthrough/types';

export const completeWalkthrough = () => {
  return { type: WalkthroughTypes.COMPLETE_WALKTHROUGH };
};
