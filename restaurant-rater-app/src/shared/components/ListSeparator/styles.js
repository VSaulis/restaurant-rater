import styled from 'styled-components/native';
import { Colors } from 'shared/styles';

export const Container = styled.View`
  height: 1px;
  background-color: ${Colors.LIGHT_GREY_1};
  margin-vertical: ${(props) => props.height / 2}px;
`;
