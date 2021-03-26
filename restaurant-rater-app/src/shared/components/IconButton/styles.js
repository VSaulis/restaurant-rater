import styled from 'styled-components/native';
import { Colors } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.LIGHT_GREY_1};
`;
