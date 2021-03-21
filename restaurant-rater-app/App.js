import React from 'react';
import { useFonts } from 'expo-font';
import { RootNavigator } from 'navigation';
import FlashMessage from 'react-native-flash-message';
import { persistor, store } from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App() {
  const [loaded] = useFonts({
    Thin: require('./assets/fonts/FiraSans-Thin.ttf'),
    ExtraLight: require('./assets/fonts/FiraSans-ExtraLight.ttf'),
    Light: require('./assets/fonts/FiraSans-Light.ttf'),
    Regular: require('./assets/fonts/FiraSans-Regular.ttf'),
    Medium: require('./assets/fonts/FiraSans-Medium.ttf'),
    SemiBold: require('./assets/fonts/FiraSans-SemiBold.ttf'),
    Bold: require('./assets/fonts/FiraSans-Bold.ttf'),
    ExtraBold: require('./assets/fonts/FiraSans-ExtraBold.ttf'),
    Black: require('./assets/fonts/FiraSans-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <StatusBar />
        <BottomSheetModalProvider>
          <RootNavigator />
        </BottomSheetModalProvider>
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}

export default App;
