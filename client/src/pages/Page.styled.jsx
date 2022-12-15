import styled from 'styled-components';

export const StyledPage = styled.div`
  /* position */
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ wrap }) => wrap};
  grid-template: ${({ gridTemplateAreas }) => gridTemplateAreas};
  /* size */
  padding: ${(props) => props.padding};
  min-height: ${(props) => props.minHeight};
`;
StyledPage.defaultProps = {
  display: 'grid',
  gridTemplateAreas: 'none',
  padding: '5em 6em',
  direction: 'none',
  gap: '0em 1em',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap',
  minHeight: '100vh'
};
