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
    & input[type='radio'] {
      /* Add if not using autoprefixer */
      -webkit-appearance: none;
      /* Remove most all native input styles */
      appearance: none;
      /* For iOS < 15 */
      background-color: ${({ theme }) => theme.mainBackgroundColor};
      /* Not removed via appearance */
      margin: 0;

      font: inherit;
      color: ${({ theme }) => theme.subText.color};
      width: 1em;
      height: 1em;
      aspect-ratio: 1/1;
      border: 0.15em solid ${({ theme }) => theme.subText.color};
      border-radius: 50%;
      transform: translateY(-0.075em);

      display: grid;
      place-content: center;
      position: relative;
      &::before {
        content: '';
        display: block;
        position: relative;
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${({ theme }) => theme.primaryColor};
        /* Windows High Contrast Mode */
        background-color: red;
      }
      &:checked:before {
        transform: scale(1);
      }
    }
  }
  & .flex-col {
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
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
