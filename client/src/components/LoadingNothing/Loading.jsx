import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { LoadingStyled } from './LoadingNothing.style';

export default function Loading({ type = 'circular', ...props }) {
  return (
    <LoadingStyled padding="var(--vertical-nothing-spaces) 0" {...props}>
      <CircularProgress sx={{ color: 'var(--primary_color_light)' }} />
    </LoadingStyled>
  );
}
Loading.propTypes = {
  type: PropTypes.string,
  props: PropTypes.any
};
