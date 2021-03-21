import styled from 'styled-components/native';
import { Colors, Typography } from 'shared/styles';

export const Container = styled.View`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  background-color: ${Colors.WHITE};
  padding: 1px;
  border: 1px solid ${Colors.NEW_PRIMARY};
`;

export const Content = styled.View`
  flex: 1;
  border-radius: ${(props) => (props.size - 2) / 2}px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.NEW_PRIMARY};
`;

export const Initials = styled(Typography.MediumText)`
  color: ${Colors.WHITE};
  font-size: 18px;
  text-transform: uppercase;
`;
