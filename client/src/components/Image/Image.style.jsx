import styled from 'styled-components';

export const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  object-fit: ${(props) => props.objectFit};
  grid-area: ${(props) => props.gridArea};
  align-self: ${({ alignSelf }) => alignSelf};
  justify-self: ${({ justifySelf }) => justifySelf};
`;
StyledImage.defaultProps = {
  width: '100%',
  height: 'auto',
  borderRadius: '0',
  objectFit: 'cover',
  gridArea: 'unset',
  alignSelf: 'center',
  justifySelf: 'center'
};