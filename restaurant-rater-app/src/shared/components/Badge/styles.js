import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  height: 26px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding-horizontal: ${Sizes.M}px;
  background-color: ${Colors.PRIMARY};
`;
