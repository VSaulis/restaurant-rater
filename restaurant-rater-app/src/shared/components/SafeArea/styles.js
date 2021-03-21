import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
