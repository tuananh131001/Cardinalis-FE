import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SMALL_MOBILE_QUERY, MOBILE_QUERY, TABLET_QUERY } from '@/assets/Constant';

export const RegisterContentStyled = styled(motion.div)`
  /* position */
  display: grid;
  gap: 0em 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  grid-template:
    'nav . theme' 0.1fr
    'form image text' 1.5fr /
    1fr 1fr 1fr;
  /* size */
  padding: 5em 6em;
  min-height: 100vh;
  @media screen and (${MOBILE_QUERY}) {
    grid-template:
      'theme'
      'text'
      'image'
      'nav'
      'form';
    padding: 3em 7em;
  }
  @media screen and (${SMALL_MOBILE_QUERY}) {
    padding: 3em 1em;
  }
  @media screen and (${TABLET_QUERY}) {
    padding: 2em 3em;
  }
`;
