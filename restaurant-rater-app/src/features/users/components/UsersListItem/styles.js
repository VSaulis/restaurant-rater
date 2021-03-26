import styled from 'styled-components/native';
import { Sizes } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-vertical: ${Sizes.S}px;
  align-items: center;
`;

export const LeftSide = styled.View`
  flex: 1;
`;
