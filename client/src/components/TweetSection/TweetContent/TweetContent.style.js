import styled, { css } from 'styled-components';

export const TweetContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
`;
export const TweetCardStyled = styled.div`
  display: grid;
  grid-template:
    'captionIcon caption .' auto
    'avatar name subInfo' auto
    'avatar content content' auto
    '. buttons buttons' auto
    'bottomDivider bottomDivider bottomDivider' auto /
    auto auto 1fr;
  justify-content: flex-start;
  align-items: center;
  gap: 0.1em 0.7em;
  width: 100%;
  ${({ isDisableHover }) =>
    !isDisableHover &&
    css`
      &:hover {
        opacity: 0.8;
        filter: brightness(120%);
        cursor: pointer;
      }
    `}
`;
TweetCardStyled.defaultProps = {
  isDisableHover: false
};
