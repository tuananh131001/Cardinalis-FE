import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ wrap }) => wrap};
  width: ${({ width }) => width};
`;

// Default Props
StyledForm.defaultProps = {
  direction: 'column',
  gap: '0.5em',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap',
  width: '60%'
};
