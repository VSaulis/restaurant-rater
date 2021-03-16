import styled from 'styled-components/native';

export const Container = styled.View``;

export const Image = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  resize-mode: cover;
  border-radius: ${(props) => props.size / 2}px;
`;
