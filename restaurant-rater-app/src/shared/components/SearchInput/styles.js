import styled from 'styled-components';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.View`
  width: 100%;
  height: 40px;
`;

export const Input = styled.TextInput`
  color: ${Colors.TEXT_PRIMARY};
  font-size: 13px;
  border-radius: 5px;
  background-color: ${Colors.LIGHT_GREY};
  padding-right: ${Sizes.PADDING}px;
  padding-left: 40px;
  flex: 1;
  font-family: Regular;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: ${Sizes.S}px;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 2;
  bottom: 0;
`;
