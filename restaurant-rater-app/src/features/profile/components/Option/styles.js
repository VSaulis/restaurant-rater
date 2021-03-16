import styled from 'styled-components/native';
import { Colors, Typography } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  height: 80px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${Colors.LIGHT_GREY};
  border-bottom-width: 1px;
`;

export const Title = styled(Typography.Subtitle)`
  flex: 1;
`;
