import styled from 'styled-components';

export const UserCardSectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  /* size */
  width: 100%;
  & .text {
    text-align: left;
    width: 100%;
  }
  &:hover {
    opacity: 0.8;
  }
`;
