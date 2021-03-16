import styled from 'styled-components/native';
import { Sizes } from 'shared/styles';

export const Container = styled.View``;

export const ReviewItemContainer = styled.View`
  margin-bottom: ${(props) => (props.last ? 0 : Sizes.XL)}px;
`;
