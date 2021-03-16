import styled from 'styled-components/native';
import { Colors, Typography } from 'shared/styles';
import hexToRgba from 'hex-to-rgba';

const disabledColor = hexToRgba(Colors.PRIMARY, 0.4);
const color = Colors.PRIMARY;

const getBackgroundColor = (props) => {
  const { disabled, outline, nude } = props;

  if (disabled) {
    return disabledColor;
  }

  if (outline || nude) {
    return 'transparent';
  }

  return color;
};

const getColor = (props) => {
  const { disabled, outline, nude } = props;

  if (outline || nude) {
    return disabled ? disabledColor : color;
  }

  return Colors.WHITE;
};

const getBorderColor = (props) => {
  const { disabled, outline } = props;

  if (outline) {
    return disabled ? disabledColor : color;
  }

  return 'transparent';
};

export const Container = styled.TouchableOpacity`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => getBorderColor(props)}
  background-color: ${(props) => getBackgroundColor(props)};
`;

export const Label = styled(Typography.Button)`
  text-transform: uppercase;
  color: ${(props) => getColor(props)};
`;
