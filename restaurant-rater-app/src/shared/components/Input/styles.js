import styled from 'styled-components';
import { Colors, Sizes, Typography } from 'shared/styles';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled(Typography.Label)`
  text-transform: uppercase;
  color: ${Colors.NEW_GREY};
`;

export const Input = styled.TextInput`
  color: ${Colors.TEXT_PRIMARY};
  font-size: 14px;
  height: 40px;
  padding: 0;
  font-family: Regular;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => (props.error ? Colors.NEW_DANGER : Colors.LIGHT_GREY)};
`;

export const Error = styled(Typography.Error)`
  margin-top: ${Sizes.XS}px;
`;
