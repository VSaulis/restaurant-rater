import styled from 'styled-components';
import * as Colors from 'shared/styles/colors';

export const BaseText = styled.Text`
  color: ${(props) => (props.color ? props.color : Colors.TEXT_PRIMARY)};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

export const RegularText = styled(BaseText)`
  font-family: Regular;
`;

export const BlackText = styled(BaseText)`
  font-family: Black;
`;

export const SemiBold = styled(BaseText)`
  font-family: SemiBold;
`;

export const BoldText = styled(BaseText)`
  font-family: Bold;
`;

// Headings

export const Heading1 = styled(BoldText)`
  font-size: 34px;
`;

export const Heading2 = styled(SemiBold)`
  font-size: 28px;
`;

export const Heading3 = styled(BlackText)`
  font-size: 24px;
`;

export const Headline = styled(SemiBold)`
  font-size: 30px;
`;

export const Title = styled(RegularText)`
  font-size: 18px;
`;

export const Paragraph = styled(RegularText)`
  font-size: 16px;
`;

export const Subtitle = styled(RegularText)`
  font-size: 14px;
`;

export const Subheader = styled(BlackText)`
  font-size: 20px;
`;

export const Button = styled(RegularText)`
  font-size: 14px;
  text-transform: uppercase;
`;

export const Caption = styled(RegularText)`
  font-size: 12px;
`;

export const Label = styled(RegularText)`
  font-size: 11px;
`;
