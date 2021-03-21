import styled from 'styled-components/native';
import { Sizes } from 'shared/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${Sizes.PADDING}px;
`;

export const Footer = styled.View`
  padding: ${Sizes.PADDING}px;
  border: 1px solid transparent;
  box-shadow: 10px 5px 5px black;
  elevation: 2;
`;
