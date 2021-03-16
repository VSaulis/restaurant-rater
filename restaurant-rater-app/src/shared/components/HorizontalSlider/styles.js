import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const ScrollContainer = styled.FlatList`
  width: 100%;
`;

export const Separator = styled.View`
  height: 100%;
  width: ${(props) => props.gap}px;
`;
