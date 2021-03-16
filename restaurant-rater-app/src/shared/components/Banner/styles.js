import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.View`
  width: 100%;
  padding: ${Sizes.L}px;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.PRIMARY};
  border-radius: 5px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  resize-mode: contain;
  height: 70px;
`;
