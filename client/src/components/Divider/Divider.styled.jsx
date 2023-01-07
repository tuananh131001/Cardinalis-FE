import styled, { css } from 'styled-components';

const GeneralStyled = css`
  grid-area: ${({ gridArea }) => gridArea};
  background-color: ${({ theme }) => theme.divider.color};
  color: ${({ theme }) => theme.divider.color};
  border: ${({ theme, width }) => `${width} solid ${theme.divider.color}`};
  border-radius: 3px;
`;
export const StyledDivider = styled.hr`
  ${GeneralStyled}
  width: 100%;
`;
export const StyledVerticalDivider = styled.div`
  ${GeneralStyled}
  height: ${({ height }) => height};
`;

const generalPropsStyle = {
  gridArea: 'unset',
  width: '1.1px'
};
StyledDivider.defaultProps = {
  ...generalPropsStyle
};
StyledVerticalDivider.defaultProps = {
  ...generalPropsStyle,
  height: 'auto'
};
