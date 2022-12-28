import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  object-fit: ${(props) => props.objectFit};
  grid-area: ${(props) => props.gridArea};
  align-self: ${({ alignSelf }) => alignSelf};
  justify-self: ${({ justifySelf }) => justifySelf};
  ${({ themeName }) =>
    themeName == 'darkTheme' &&
    css`
      -webkit-filter: brightness(90%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%)
        sepia(0%);
      filter: brightness(90%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%);
      mix-blend-mode: none;
    `}
`;
StyledImage.defaultProps = {
  width: '100%',
  height: 'auto',
  borderRadius: '0',
  margin: '0',
  objectFit: 'cover',
  gridArea: 'unset',
  alignSelf: 'center',
  justifySelf: 'center'
};
