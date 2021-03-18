import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const CheckContainer = styled.View`
  width: 30px;
  height: 30px;
  margin-right: ${Sizes.S}px;
  background-color: ${Colors.WHITE};
  border: 1px solid
    ${(props) => (props.checked ? Colors.PRIMARY : Colors.LIGHT_GREY_2)};
`;
