import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FlexContainer } from '@/components/Container/Container.styled';
import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';

export default function Loading({ type = 'circular', ...props }) {
  if (type == 'circular')
    return (
      <FlexContainer height="100%" {...props}>
        <CircularProgress sx={{ color: 'var(--primary_color_light)' }} />
      </FlexContainer>
    );
  else
    return (
      <FlexContainer height="100%" gap="1em" fd="column" {...props}>
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
      </FlexContainer>
    );
}
Loading.propTypes = {
  type: PropTypes.string,
  props: PropTypes.any
};
