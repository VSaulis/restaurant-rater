import styled from 'styled-components/native';
import { Colors, Sizes, Typography } from 'shared/styles';

export const Container = styled.View``;

export const RolesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled(Typography.Label)`
  text-transform: uppercase;
  margin-bottom: ${Sizes.S}px;
  color: ${Colors.NEW_GREY};
`;

export const RoleContainer = styled.TouchableOpacity`
  height: 40px;
  width: 30%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.selected ? Colors.NEW_PRIMARY : Colors.NEW_LIGHT_GREY)};
`;

export const Error = styled(Typography.Error)`
  margin-top: ${Sizes.XS}px;
`;
