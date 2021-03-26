import styled from 'styled-components/native';
import { Colors, Sizes } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 45px;
  align-items: center;
`;

export const CheckContainer = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: ${Sizes.S}px;
  background-color: ${Colors.WHITE};
  border: 1px ${(props) => (props.checked ? Colors.PRIMARY : Colors.LIGHT_GREY_2)};
`;

export const Check = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${Colors.NEW_PRIMARY};
`;
