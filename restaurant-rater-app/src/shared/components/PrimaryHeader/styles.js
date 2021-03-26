import styled from 'styled-components/native';
import { Sizes, Typography } from 'shared/styles';

export const Title = styled(Typography.Heading)`
  flex: 1;
  padding-right: ${Sizes.PADDING}px;
`;

export const Container = styled.View`
  padding-horizontal: ${Sizes.PADDING}px;
  padding-vertical: ${Sizes.PADDING}px;
  padding-bottom: ${Sizes.S}px;
`;
