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
    'avatar name name' auto
    'avatar content content' auto
    '. buttons buttons' auto
    'bottomDivider bottomDivider bottomDivider' auto /
    auto auto 1fr;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3em 0.8em;
  width: 100%;
  padding: 0 var(--horizontal-spaces);
  ${({ isDisableHover }) =>
    !isDisableHover &&
    css`
      &:hover {
        opacity: 0.8;
        filter: brightness(120%);
        cursor: pointer;
      }
    `}
  @media screen and (max-width: 768px) {
    gap: 0.3em 0.3em;
  }
`;
TweetCardStyled.defaultProps = {
  isDisableHover: false
};
