import styled from 'styled-components';
import { css } from 'styled-components';

const generalContainerStyle = css`
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  grid-area: ${(props) => props.gridArea};
`;

export const VerticalLeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  ${generalContainerStyle}
`;
export const HorizontalBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${generalContainerStyle}
`;

const generalDefaultProps = {
  gap: '0',
  width: '100%',
  gridArea: 'unset'
};
VerticalLeftContainer.defaultProps = {
  ...generalDefaultProps
};
HorizontalBetweenContainer.defaultProps = {
  ...generalDefaultProps
};
