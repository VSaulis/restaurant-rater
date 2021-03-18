import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  position: relative;
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.ImageBackground`
  height: 185px;
  width: 100%;
  resize-mode: cover;
  padding: ${Sizes.PADDING}px;
`;

export const Details = styled.View`
  padding: ${Sizes.PADDING}px;
  flex-direction: row;
`;

export const RightSide = styled.View`
  flex: 1;
`;

export const LeftSide = styled.View`
  padding-top: 3px;
  align-items: flex-end;
`;
