import styled from 'styled-components';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.View`
  width: 100%;
  height: 60px;
`;

export const Input = styled.TextInput`
  color: ${Colors.TEXT_PRIMARY};
  font-size: 13px;
  line-height: 16px;
  padding-horizontal: ${Sizes.PADDING}px;
  flex: 1;
  font-family: Regular;
`;
