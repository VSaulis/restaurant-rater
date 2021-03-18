import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const Content = styled.View`
  flex: 1;
`;
