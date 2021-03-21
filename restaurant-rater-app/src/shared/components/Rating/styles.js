import styled from 'styled-components/native';
import { Colors, Sizes, Typography } from 'shared/styles';

export const Container = styled.View`
  align-items: flex-start;
`;

export const StarContainer = {
  margin: 0,
  marginRight: Sizes.XS,
};

export const Error = styled(Typography.Error)`
  margin-top: ${Sizes.XS}px;
`;

export const Label = styled(Typography.Label)`
  text-transform: uppercase;
  color: ${Colors.NEW_GREY};
  margin-bottom: ${Sizes.XS}px;
`;
