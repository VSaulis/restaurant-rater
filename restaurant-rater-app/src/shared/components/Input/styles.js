import styled from 'styled-components';
import { Colors, Sizes, Typography } from 'shared/styles';

export const Container = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  height: 50px;
  border-bottom-color: ${Colors.LIGHT_GREY};
`;

export const Label = styled(Typography.Label)`
  text-transform: uppercase;
  position: absolute;
  left: ${Sizes.S}px;
  top: ${Sizes.S}px;
  color: ${Colors.PRIMARY};
`;

export const Input = styled.TextInput`
  color: ${Colors.TEXT_PRIMARY};
  font-size: 13px;
  padding-horizontal: ${Sizes.S}px;
  padding-top: ${Sizes.XS + 12}px;
  flex: 1;
  font-family: Regular;
`;
