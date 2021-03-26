import styled from 'styled-components';
import * as Colors from 'shared/styles/colors';

export const BaseText = styled.Text`
  color: ${(props) => (props.color ? props.color : Colors.TEXT_PRIMARY)};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

// Font family

export const ThinText = styled(BaseText)`
  font-family: Thin;
`;

export const ExtraLightText = styled(BaseText)`
  font-family: ExtraLight;
`;

export const LightText = styled(BaseText)`
  font-family: Light;
`;

export const RegularText = styled(BaseText)`
  font-family: Regular;
`;

export const MediumText = styled(BaseText)`
  font-family: Medium;
`;

export const SemiBoldText = styled(BaseText)`
  font-family: SemiBold;
`;

export const BoldText = styled(BaseText)`
  font-family: Bold;
`;

export const ExtraBoldText = styled(BaseText)`
  font-family: ExtraBold;
`;

export const BlackText = styled(BaseText)`
  font-family: Black;
`;

// App fonts

export const Caption = styled(MediumText)`
  font-size: 12px;
  color: ${Colors.TEXT_SECONDARY};
`;

export const Badge = styled(SemiBoldText)`
  font-size: 11px;
  text-transform: uppercase;
  color: ${Colors.WHITE};
`;

export const Title = styled(MediumText)`
  font-size: 15px;
`;

export const Paragraph = styled(RegularText)`
  font-size: 14px;
  color: ${Colors.TEXT_SECONDARY};
`;

export const Link = styled(RegularText)`
  font-size: 14px;
  color: ${Colors.NEW_PRIMARY};
`;

export const Heading = styled(SemiBoldText)`
  font-size: 26px;
`;

// ---------------

export const Heading1 = styled(SemiBoldText)`
  font-size: 34px;
`;

export const Heading3 = styled(SemiBoldText)`
  font-size: 24px;
`;

export const Subtitle = styled(SemiBoldText)`
  font-size: 14px;
`;

export const Subheader = styled(SemiBoldText)`
  font-size: 20px;
`;

export const Button = styled(SemiBoldText)`
  font-size: 14px;
  text-transform: uppercase;
`;

export const Label = styled(SemiBoldText)`
  font-size: 12px;
`;

export const Error = styled(RegularText)`
  font-size: 12px;
  color: ${Colors.NEW_DANGER};
`;
