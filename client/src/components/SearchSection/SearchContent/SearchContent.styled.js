import styled from 'styled-components';

export const SearchListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  width: 100%;
  padding: 2em 0;
  & input {
    width: 100%;
    background-color: transparent;
    outline: none;
    padding: 0 var(--horizontal-spaces);
    border: none;
    color: ${({ theme }) => theme.homeInput.color};
  }
`;
export const SearchContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
`;
