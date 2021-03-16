import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  background-color: ${Colors.WHITE};
`;

export const SafeArea = styled.SafeAreaView``;

export const Content = styled.View`
  padding: ${Sizes.L}px ${Sizes.S}px ${Sizes.S}px ${Sizes.S}px;
  align-items: center;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
