import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';
import { LoadingStyled } from './LoadingNothing.style';

export default function Loading({ type = 'circular', ...props }) {
  if (type == 'circular')
    return (
      <LoadingStyled padding="var(--vertical-nothing-spaces) 0" {...props}>
        <CircularProgress sx={{ color: 'var(--primary_color_light)' }} />
      </LoadingStyled>
    );
  else
    return (
      <LoadingStyled gap="1em" {...props}>
        <Image
          src="https://media.tenor.com/RXF9kEWyyHwAAAAi/peach-goma.gif"
          width="50%"
          height="fit-content"
        />
        <Text
          type="h4"
          jc="center"
          textThemeName="paragraphText"
          text={'Please Wait For A Minutee...'}
        />
      </LoadingStyled>
    );
}
Loading.propTypes = {
  type: PropTypes.string,
  props: PropTypes.any
};
