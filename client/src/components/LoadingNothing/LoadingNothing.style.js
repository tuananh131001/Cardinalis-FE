import styled from 'styled-components';

export const QuestionGifStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  flex: 1;
  & img {
    width: 40%;
  }
  @media (max-width: 1134px) {
    & img {
      width: 35%;
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 2em;
    & img {
      width: 45%;
    }
    & .loading-text {
      font-weight: 600;
      font-size: var(--font-size-md);
    }
  }
  @media (max-width: 595px) {
    & img {
      width: 60%;
    }
  }
`;

export const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: ${({ gap }) => gap};
  flex-direction: column;
  flex: 1;
`;
LoadingStyled.defaultProps = {
  gap: '0'
};
