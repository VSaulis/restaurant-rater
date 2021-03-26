import styled from 'styled-components/native';
import { Sizes } from 'shared/styles';

export const Container = styled.View`
  flex-direction: row;
  padding: ${Sizes.S}px ${Sizes.XS}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export const Content = styled.View`
  flex: 1;
`;
