import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${Colors.WHITE};
  padding: ${Sizes.PADDING}px;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 40px;
`;

export const Content = styled.View`
  flex: 1;
`;
