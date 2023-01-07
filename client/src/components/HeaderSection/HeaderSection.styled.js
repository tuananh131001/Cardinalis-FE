import styled, { css } from 'styled-components';

export const HeaderSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7em;
  flex-wrap: nowrap;
  /* size */
  padding: 0.7em var(--horizontal-spaces);
  width: 100%;
  height: auto;
  min-height: 0px;

  /* position */
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  top: 0;
  left: 0;

  /* style */
  ${({ pseudoAfter }) => {
    switch (pseudoAfter) {
      case 1:
        return css`
          box-shadow: 3px 4px 5px 4px ${({ theme }) => theme.primaryPseudo.boxShadow};
          -webkit-box-shadow: 3px 4px 5px 4px ${({ theme }) => theme.primaryPseudo.boxShadow};
          -moz-box-shadow: 3px 4px 5px 4px ${({ theme }) => theme.primaryPseudo.boxShadow};
          /* shape */
          border-bottom-left-radius: ${(props) => props.borderRadius};
          border-bottom-right-radius: ${(props) => props.borderRadius};
          &::after {
            content: '';
            /* position */
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            /* shape */
            width: 100%;
            height: 100%;
            border-bottom-left-radius: ${(props) => props.borderRadius};
            border-bottom-right-radius: ${(props) => props.borderRadius};
            /* style */
            background-color: ${({ theme }) => theme.primaryPseudo.backgroundColor};
            opacity: 0.9;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px) brightness(120%);
          }
        `;
      case 2:
        return css`
          padding: 1.2em var(--horizontal-spaces);
          box-shadow: 3px 2px 5px 2px ${({ theme }) => theme.primaryPseudo.boxShadow};
          -webkit-box-shadow: 3px 2px 5px 2px ${({ theme }) => theme.primaryPseudo.boxShadow};
          -moz-box-shadow: 3px 2px 5px 2px ${({ theme }) => theme.primaryPseudo.boxShadow};
          /* shape */
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          &::after {
            content: '';
            /* position */
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            /* shape */
            width: 100%;
            height: 100%;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            /* style */
            background-color: ${({ theme }) => theme.primaryPseudo.backgroundColor};
            opacity: 0.9;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px) brightness(120%);
          }
        `;
    }
  }}
  & button {
    width: fit-content;
    border-radius: 50%;
    &.left {
      padding: 0.3em;
      transform: translateX(-0.3em);
    }
  }
  & .text {
    text-align: left;
    width: 100%;
  }
`;
HeaderSectionStyled.defaultProps = {
  position: 'relative',
  zIndex: 1,
  borderRadius: '10px',
  pseudoAfter: 0
};
