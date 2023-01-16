import styled from 'styled-components';
import { css } from 'styled-components';

const generalContainerStyle = css`
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  gap: ${(props) => props.gap};
  grid-area: ${(props) => props.gridArea};
  align-self: ${({ alignSelf }) => alignSelf};
  overflow: ${(props) => props.overflow};
  /* size */
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};

  /* overflow scrollbar */
  ${({ isHideScrollBar }) =>
    isHideScrollBar &&
    css`
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }
    `}

  /* position */
  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
      top: ${props.top};
      left: ${props.left};
      z-index: ${props.zIndex};
    `}
  ${({ pseudoAfter }) => {
    switch (pseudoAfter) {
      case '1':
        return css`
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
export const FlexContainer = styled.div`
  display: flex;
  ${generalContainerStyle}
  flex-direction: ${(props) => props.fd};
  flex-wrap: ${(props) => props.fw};
`;
export const GridContainer = styled.div`
  display: grid;
  ${generalContainerStyle}
  grid-template: ${(props) => props.gridTemplateAreas};
`;
export const InlineContainer = styled.div`
  text-align: ${(props) => props.txtAlign};
  ${generalContainerStyle}
  & > * {
    display: inline;
  }
`;

const generalDefaultProps = {
  overflow: 'auto',
  position: 'unset',
  top: 'unset',
  left: 'unset',
  zIndex: 'unset',
  width: '100%',
  height: 'auto',
  jc: 'center',
  ai: 'center',
  gap: '0px',
  gridArea: 'none',
  alignSelf: 'unset',
  padding: '0px',
  minHeight: '0px',
  isHideScrollBar: false,
  pseudoAfter: 'none',
  pseudoAfterBorderRadius: '30px'
};
FlexContainer.defaultProps = {
  ...generalDefaultProps,
  fd: 'row',
  fw: 'nowrap'
};
GridContainer.defaultProps = {
  ...generalDefaultProps,
  gridTemplateAreas: 'none'
};
InlineContainer.defaultProps = {
  ...generalDefaultProps,
  txtAlign: 'normal'
};
