import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Screens } from 'shared/constant';
import { ReviewsScreen } from 'features/reviews/screens';
import { primaryHeaderOptions } from '../../config';

const ReviewsStack = createStackNavigator();

function ReviewsNavigator() {
  return (
    <ReviewsStack.Navigator screenOptions={primaryHeaderOptions}>
      <ReviewsStack.Screen
        options={{ title: 'Reviews' }}
        name={Screens.REVIEWS}
        component={ReviewsScreen}
      />
    </ReviewsStack.Navigator>
  );
}

export default ReviewsNavigator;
