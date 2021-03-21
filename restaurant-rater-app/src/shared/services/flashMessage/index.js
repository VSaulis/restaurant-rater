import { showMessage } from 'react-native-flash-message';
import { Platform, StatusBar } from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const showDefaultMessage = (message, description, type) => {
  showMessage({
    message,
    description,
    type,
    icon: type,
    statusBarHeight,
    animationDuration: 300,
  });
};

export const showSuccess = (message) => {
  showDefaultMessage('Success!', message, 'success');
};

export const showError = (message) => {
  showDefaultMessage('Error!', message, 'danger');
};
