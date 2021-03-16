import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';
import hexToRgba from 'hex-to-rgba';

export const Container = styled.TouchableOpacity`
  position: relative;
`;

export const Image = styled.Image`
  height: 185px;
  width: 100%;
  border-radius: 12px;
  resize-mode: cover;
`;

export const RatingContainer = styled.View`
  position: absolute;
  z-index: 1;
  background-color: ${hexToRgba(Colors.BLACK, 0.5)};
  border-radius: 5px;
  padding: ${Sizes.XS}px;
  right: ${Sizes.S}px;
  top: ${Sizes.S}px;
  flex-direction: row;
  align-items: center;
`;
