import styled, { css } from 'styled-components';

// Reusable CSS
const StyledGeneralInput = css`
  /* border */
  border-radius: ${(props) => props.borderRadius};
  border: ${({ theme, inputThemeName }) =>
    `1px solid ${theme[inputThemeName].borderColor}` ?? 'none'};
  /* font */
  font-family: var(--font-family);
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  /* color */
  color: ${({ theme, inputThemeName }) => theme[inputThemeName].color};
  background-color: ${({ theme, inputThemeName }) =>
    theme[inputThemeName].backgroundColor ?? 'transparent'};
  /* size */
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  /* placeholder */
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  &::-moz-input-placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    outline: none;
  }
`;

// Styled Components
// Input that has icon
export const StyledInputContainer = styled.div`
  display: flex;
  align-items: ${(props) => props.ai};
  justify-content: ${(props) => props.jc};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  ${StyledGeneralInput}
`;
export const StyledInputIcon = styled.input`
  ${StyledGeneralInput}
  border: none;
  background-color: inherit;
  outline: none;
  flex: 1;
`;
// Textarea input
export const StyledTextArea = styled.textarea`
  ${StyledGeneralInput}
  resize: none;
  overflow: hidden;
  line-height: 1em;
  padding: ${(props) => props.padding};
`;
// Normal input
export const StyledInput = styled.input`
  ${StyledGeneralInput}
  padding: ${(props) => props.padding};
`;

// Default Props
const generalDefaultProps = {
  inputThemeName: 'input', // or loginInput if it's in login page
  borderRadius: '10px',
  weight: 500,
  size: 'clam(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem)',
  width: '100%'
};
StyledInputContainer.defaultProps = {
  ...generalDefaultProps,
  padding: '0.7em 0.8em',
  height: '3.75em',
  ai: 'center',
  jc: 'space-between',
  width: '100%'
};
StyledTextArea.defaultProps = {
  ...generalDefaultProps,
  padding: '0.9em 0.8em 2em'
};
StyledInput.defaultProps = {
  ...generalDefaultProps,
  padding: '0.7em 0.8em',
  height: '3.75em'
};
