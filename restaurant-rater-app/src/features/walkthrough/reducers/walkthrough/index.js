import update from 'immutability-helper';
import { WalkthroughTypes } from 'features/walkthrough/types';

const initialState = {
  isWalkthroughCompleted: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WalkthroughTypes.COMPLETE_WALKTHROUGH: {
      return update(state, {
        isWalkthroughCompleted: { $set: true },
      });
    }

    default: {
      return state;
    }
  }
};
