import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function reset(name, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({ routes: [{ name, params }] }),
  );
}

export function goBack() {
  const navigation = navigationRef.current;
  if (navigation && navigation.canGoBack()) {
    navigation.goBack();
  }
}
