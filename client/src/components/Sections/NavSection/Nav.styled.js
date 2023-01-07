import styled from 'styled-components';

export const MainNavStyled = styled.div`
  /* fd="column"
      ai="flex-start"
      jc="flex-start"
      gap="1.5em"
      width="100%"
      position="sticky"
      top="0" */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
  width: 100%;
  position: sticky;
  top: 0;
  & .nav-image {
    margin: 0 1.7em;
  }
  & > button:not(.tweet-button) {
    padding: 0.7em 1.7em;
    border-radius: 30%/110%;
  }
  & > button.tweet-button {
    width: 100%;
    padding: 0;
    height: 50px;
    border-radius: 30%/110%;
    align-self: center;
  }
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    & > button {
      align-self: center;
      justify-self: center;
    }
    & > button.tweet-button {
      width: 50px;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    & > button {
      padding: 0;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
    & .nav-image {
      margin: 0 0.6em;
    }
  }
`;
