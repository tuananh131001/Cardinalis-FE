import styled from 'styled-components';

export const SearchSectionStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #212327;
  height: 50px;
  &:focus-within {
    border: 0.5px solid #DC6C14;
  }
  & > :first-child {
    width: 100%;
    background-color: transparent;
    outline: none;
    padding: 1em;
    border: none;
    color: ${({ theme }) => theme.paragraphText.color};
  }
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
