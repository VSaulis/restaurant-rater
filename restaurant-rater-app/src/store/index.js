import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { authReducer } from 'features/auth/reducers';
import { profileReducer } from 'features/profile/reducers';
import {
  restaurantsReducer,
  restaurantReducer,
  restaurantsFilterReducer,
} from 'features/restaurants/reducers';
import { reviewsReducer } from 'features/reviews/reducers';
import { walkthroughReducer } from 'features/walkthrough/reducers';
import { userReducer, usersReducer } from 'features/users/reducers';
import { categoriesReducer, categoryReducer } from 'features/categories/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'walkthrough', 'profile'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  restaurants: restaurantsReducer,
  restaurantsFilter: restaurantsFilterReducer,
  restaurant: restaurantReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  user: userReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  walkthrough: walkthroughReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);
// persistor.purge();

export { store, persistor };
