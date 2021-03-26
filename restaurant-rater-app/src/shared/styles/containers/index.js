import styled from 'styled-components/native';
import * as Sizes from '../sizes';
import * as Colors from '../colors';

export const Footer = styled.View`
  padding: ${Sizes.PADDING}px;
  border-top-width: 1px;
  border-top-color: ${Colors.NEW_LIGHT_GREY_1};
`;

export const ScrollView = styled.ScrollView``;

export const FilledContainer = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-horizontal: ${Sizes.PADDING}px;
  padding-bottom: ${Sizes.S}px;
`;

export const FlatList = styled.FlatList``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
