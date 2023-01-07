import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SMALL_MOBILE_QUERY, MOBILE_QUERY } from '@/assets/Constant';

export const LoginContentStyled = styled(motion.div)`
  /* position */
  display: grid;
  gap: 0em 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  grid-template:
    'nav . theme' 0.1fr
    'text image form' 1.5fr /
    1fr 1fr 1fr;
  /* size */
  padding: 5em 6em;
  min-height: 100vh;
  & .text-container {
    align-self: center;
    flex-direction: column;
    gap: 0.7em;
    min-height: 0;
    overflow: visible;
    text-align: left;
  }
  & .image-container {
    width: 100%;
  }
  & .nav-container {
    width: 66%;
    gap: 1.5em;
    padding: 1em;
    overflow: visible;
    & button {
      font-size: var(--font-size-sm);
    }
  }
  & form {
    overflow: visible;
  }
  @media screen and (max-width: 1024px) {
    padding: 2em 3em;
    grid-template:
      'nav theme' 0.1fr
      'image form' 1fr
      'text form' 1fr /
      1fr 1fr;
    & .text-container {
      align-self: flex-start;
      text-align: center;
    }
    & .image-container {
      width: 50%;
      align-self: flex-end;
    }
    & .nav-container {
      width: 70%;
    }
  }
  @media screen and (${MOBILE_QUERY}) {
    grid-template:
      'theme'
      'text'
      'image'
      'nav'
      'form';
    padding: 3em 6em;
    & .text-container {
      min-height: 5em;
    }
    & .image-container {
      width: 65%;
      align-self: center;
    }
    & .nav-container {
      width: 100%;
      padding: 2em 0;
      & button {
        font-size: var(--font-size-base);
      }
    }
    & form {
      justify-content: flex-start;
    }
  }
  @media screen and (${SMALL_MOBILE_QUERY}) {
    padding: 3em 1em;
    & .nav-container {
      padding: 2em 3em;
    }
  }
`;
