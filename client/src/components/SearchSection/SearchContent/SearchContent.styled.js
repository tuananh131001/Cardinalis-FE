import styled from 'styled-components';

export const SearchListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  width: 100%;
  padding: 2em 0;
`;
export const SearchContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
  & input {
    width: 100%;
    background-color: transparent;
    outline: none;
    /* padding: 1em calc(var(--horizontal-spaces) + 0.7em); */
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.homeInput.color};
    font-size: var(--font-size-base);
  }
`;
