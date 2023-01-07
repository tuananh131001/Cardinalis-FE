import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProfileSectionStyled = styled(motion.div)`
  display: flex;
  margin: 0 auto;
  padding: 1em 4em;
  min-height: 100vh;
  gap: 2.5em;
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
    gap: 0.5em;
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
`;
