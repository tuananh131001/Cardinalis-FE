import styled, { css } from 'styled-components';

export const HeaderSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7em;
  /* size */
  padding: 0 var(--horizontal-spaces);

  /* position */
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  top: 0;
  left: 0;

  /* style */
  ${({ pseudoAfter }) => {
    switch (pseudoAfter) {
      case 1:
        css`
          box-shadow: 3px 6px 10px 4px ${({ theme }) => theme.primaryPseudo.boxShadow};
          -webkit-box-shadow: 3px 6px 10px 4px ${({ theme }) => theme.primaryPseudo.boxShadow};
          -moz-box-shadow: 3px 6px 10px 4px ${({ theme }) => theme.primaryPseudo.boxShadow};
          /* shape */
          border-bottom-left-radius: ${(props) => props.pseudoAfterBorderRadius};
          border-bottom-right-radius: ${(props) => props.pseudoAfterBorderRadius};
          &::after {
            content: '';
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: ${({ theme }) => theme.primaryPseudo.backgroundColor};
            opacity: 0.8;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px) brightness(120%);
            z-index: -1;
          }
        `;
    }
  }}
`;
HeaderSectionStyled.defaultProps = {
  position: 'relative',
  zIndex: 1,
  pseudoAfterBorderRadius: '0.5em',
  pseudoAfter: 0
};
