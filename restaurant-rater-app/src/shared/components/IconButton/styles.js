import styled from 'styled-components/native';
import hexToRgba from 'hex-to-rgba';
import { Colors } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${hexToRgba(Colors.WHITE, 0.25)};
`;
