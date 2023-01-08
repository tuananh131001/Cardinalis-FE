import styled, { css } from 'styled-components';

export const SearchSectionStyled = styled.div`
  ${({ type }) =>
    type == 'modal'
      ? css`
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background-color: ${({ theme }) => theme.homeInput.backgroundColor};
          height: 50px;
          &:focus-within {
            border: 0.5px solid ${({ theme }) => theme.homeInput.borderColor};
          }
          & > :first-child {
            width: 100%;
            background-color: transparent;
            outline: none;
            padding: 1em;
            border: none;
            color: ${({ theme }) => theme.homeInput.color};
          }
        `
      : css`
          display: flex;
          margin: 0 auto;
          padding: 1em 4em;
          min-height: 100vh;
          gap: 3em;
          & input {
            width: 100%;
            background-color: transparent;
            outline: none;
            padding: 1em;
            border: none;
            color: ${({ theme }) => theme.homeInput.color};
          }
          & > :first-child {
            flex: 1;
            padding: 0.7em 0;
          }
          & > :nth-child(2) {
            flex: 3;
          }
          & > :last-child {
            flex: 1.5;
          }
          @media (max-width: 1134px) {
            padding: 1em;
            & > :first-child {
              flex: 0.5;
            }
          }
          @media (max-width: 768px) {
            padding: 1em 0.4em;
            & > :last-child {
              display: none;
            }
          }
        `}
`;

export const DropDownSearchSectionStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: ${({ theme }) => theme.body.backgroundColor};
  border-radius: 4px;
  z-index: 1;
  box-shadow: 0 0px 2px 1px grey;
`;
