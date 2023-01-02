import styled, { css } from 'styled-components';

// Special:
// Border color style: 3 ways to set border color (in order of priority):
// 1. props.borderColor (Ex: red, blue, pink)
// 2. props.theme[props.borderColor].borderColor (Ex: props.theme.card.borderColor)
// 3. props.theme.mainBackgroundColor (final options)

export const StyledImage = styled.img`
  /* size */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  object-fit: ${(props) => props.objectFit};
  margin: ${(props) => props.margin};
  /* position */
  align-self: ${({ alignSelf }) => alignSelf};
  justify-self: ${({ justifySelf }) => justifySelf};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  /* others */
  grid-area: ${(props) => props.gridArea};
  /* border */
  border: ${(props) =>
    props.borderWidth +
    ' ' +
    props.borderStyle +
    ' ' +
    (props.borderColor ??
      props.theme[props.borderColor]?.borderColor ??
      props.theme.mainBackgroundColor)};
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
  justifySelf: 'center',
  aspectRatio: 'unset',
  position: 'auto',
  top: 'unset',
  bottom: 'unset',
  right: 'unset',
  left: 'unset',
  borderWidth: '0',
  borderStyle: 'none'
};
