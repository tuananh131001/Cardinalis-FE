import styled from 'styled-components';

export const StyledPage = styled.div`
  /* position */
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ wrap }) => wrap};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
  /* size */
  padding: ${(props) => props.padding};
`;
StyledPage.defaultProps = {
  display: 'grid',
  gridTemplateAreas: 'none',
  padding: '0 1em',
  direction: 'row',
  gap: '1em',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap'
};
