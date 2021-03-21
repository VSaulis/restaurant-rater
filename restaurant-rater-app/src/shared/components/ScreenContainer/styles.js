import styled from 'styled-components/native';
import { Colors } from 'shared/styles';
import SafeArea from 'shared/components/SafeArea';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.WHITE};
`;

export const Content = styled(SafeArea)`
  flex: 1;
`;
