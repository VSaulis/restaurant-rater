import styled from 'styled-components';
import { Colors, Sizes, Typography } from 'shared/styles';

export const Container = styled.View`
  width: 100%;
`;

export const Select = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.error ? Colors.NEW_DANGER : Colors.LIGHT_GREY};
`;

export const Label = styled(Typography.Label)`
  text-transform: uppercase;
  color: ${Colors.NEW_GREY};
`;

export const Error = styled(Typography.Error)`
  margin-top: ${Sizes.XS}px;
`;

export const Value = styled(Typography.RegularText)`
  font-size: 14px;
  color: ${Colors.TEXT_PRIMARY};
`;

export const Placeholder = styled(Typography.RegularText)`
  font-size: 14px;
  color: ${Colors.PLACEHOLDER};
`;
