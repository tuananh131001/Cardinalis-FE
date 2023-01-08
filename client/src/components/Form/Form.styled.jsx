import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ wrap }) => wrap};
  grid-area: ${({ gridArea }) => gridArea};
  align-self: ${({ alignSelf }) => alignSelf};
  /* size */
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  overflow: scroll;
  & .flex-row {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0 0 1em;
    & .label,
    & .button {
      width: fit-content;
      align-items: center;
    }
  }
`;

// Default Props
StyledForm.defaultProps = {
  direction: 'column',
  gap: '0.5em',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap',
  width: '100%',
  height: '50vh',
  gridArea: 'unset',
  alignSelf: 'unset',
  overflow: 'auto',
  padding: '0'
};
