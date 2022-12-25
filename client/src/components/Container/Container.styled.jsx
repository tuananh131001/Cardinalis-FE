import styled from 'styled-components';
import { css } from 'styled-components';

const generalContainerStyle = css`
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  gap: ${(props) => props.gap};
  grid-area: ${(props) => props.gridArea};
  align-self: ${({ alignSelf }) => alignSelf};
  /* size */
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
`;
export const FlexContainer = styled.div`
  ${generalContainerStyle}
  display: flex;
  flex-direction: ${(props) => props.fd};
  flex-wrap: ${(props) => props.fw};
`;
export const GridContainer = styled.div`
  ${generalContainerStyle}
  display: grid;
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
  width: '100%',
  height: 'auto',
  jc: 'center',
  ai: 'center',
  gap: '0px',
  gridArea: 'none',
  alignSelf: 'unset',
  padding: '0px',
  minHeight: '0px'
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
