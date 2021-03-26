import styled from 'styled-components/native';
import { Sizes } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  padding-vertical: ${Sizes.S}px;
  flex-direction: row;
  align-items: center;
`;

export const LeftSide = styled.View`
  flex: 1;
`;

export const RightSide = styled.View`
  align-items: flex-end;
`;
