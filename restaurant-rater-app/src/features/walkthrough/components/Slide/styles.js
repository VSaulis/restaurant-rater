import styled from 'styled-components/native';
import { Sizes } from 'shared/styles';

export const Container = styled.View`
  flex: 1;
  padding: ${Sizes.PADDING}px;
`;

export const Footer = styled.View`
  padding-vertical: ${Sizes.L}px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  flex: 1;
  resize-mode: contain;
`;
