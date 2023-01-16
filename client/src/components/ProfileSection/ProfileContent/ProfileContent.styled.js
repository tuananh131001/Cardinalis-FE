import styled from 'styled-components';

export const ProfileContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
  & > :last-child {
    flex: 1;
  }
`;

export const MainInfoProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;

  width: 100%;
  height: auto;

  position: relative;
  padding: ${({ bckHeight }) => `calc(${bckHeight} + 0.5em) var(--horizontal-spaces) 0`};

  /* Hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
