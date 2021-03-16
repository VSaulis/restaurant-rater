import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';
import hexToRgba from 'hex-to-rgba';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: ${Sizes.PADDING}px;
`;

export const FormContainer = styled.View`
  background-color: ${Colors.WHITE};
  border-radius: 6px;
  box-shadow: 0px 4px 4px ${hexToRgba(Colors.BLACK, 0.25)};
  elevation: 3;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${Sizes.PADDING}px;
  border-top-width: 1px;
  border-top-color: ${Colors.LIGHT_GREY};
`;

export const ButtonContainer = styled.View``;
