import React from 'react';
import { useFonts } from 'expo-font';
import { RootNavigator } from 'navigation';
import FlashMessage from 'react-native-flash-message';
import { persistor, store } from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function App() {
  const [loaded] = useFonts({
    ExtraLight: require('./assets/fonts/SourceSansPro-ExtraLight.ttf'),
    Light: require('./assets/fonts/SourceSansPro-Light.ttf'),
    Regular: require('./assets/fonts/SourceSansPro-Regular.ttf'),
    Black: require('./assets/fonts/SourceSansPro-Black.ttf'),
    SemiBold: require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    Bold: require('./assets/fonts/SourceSansPro-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <StatusBar />
        <RootNavigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}

export default App;
