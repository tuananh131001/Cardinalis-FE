import styled from 'styled-components';

export const UserCardSectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0.3em;
  /* size */
  width: 100%;

  & .text {
    text-align: left;
  }
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
UserCardSectionStyled.defaultProps = {
  justifySelf: 'unset'
};
