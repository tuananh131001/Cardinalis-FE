import styled, { css } from 'styled-components';
import { BORDER_RADIUS_INPUT } from '@/styles/Constant';

// Reusable CSS
const StyledGeneralInput = css`
  /* border */
  border-radius: ${(props) => props.borderRadius};
  border: ${({ theme, inputName }) => `1px solid ${theme[inputName].borderColor}` ?? 'none'};
  /* font */
  font-family: var(--font-family);
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  /* color */
  color: ${({ theme, inputName }) => theme[inputName].color};
  background-color: ${({ theme, inputName }) => theme[inputName].backgroundColor ?? 'transparent'};
  /* size */
  height: ${(props) => props.height};

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
  ${StyledGeneralInput}
  & input {
    ${StyledGeneralInput}
  }
`;
export const StyledInputIcon = styled.input`
  border: none;
  background-color: inherit;
  outline: none;
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

  /* &:focus {
    outline: ${({ theme }) => theme.input.outlineColor};
  } */
`;

// Default Props
const generalDefaultProps = {
  inputName: 'input', // or loginInput if it's in login page
  borderRadius: BORDER_RADIUS_INPUT,
  weight: 500,
  size: 'clam(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem)'
};
StyledInputContainer.defaultProps = {
  ...generalDefaultProps,
  padding: '0.7em 0.8em',
  height: '3.75em',
  ai: 'center',
  jc: 'space-between'
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
