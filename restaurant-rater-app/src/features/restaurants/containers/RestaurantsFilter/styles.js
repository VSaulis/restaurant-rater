import styled from 'styled-components/native';
import { Sizes } from 'shared/styles';

export const Container = styled.View`
  flex: 1;
`;

export const FixedContainer = styled.View`
  padding: ${Sizes.PADDING}px;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;
