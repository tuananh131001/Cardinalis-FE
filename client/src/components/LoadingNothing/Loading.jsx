import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FlexContainer } from '@/components/Container/Container.styled';
import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';

export default function Loading({ type = 'circular' }) {
  if (type == 'circular')
    return (
      <FlexContainer height="100%">
        <CircularProgress sx={{ color: 'var(--primary_color_light)' }} />
      </FlexContainer>
    );
  else
    return (
      <FlexContainer height="100%" fd="column">
        <Image
          src="https://media.tenor.com/_jxpbkCkJK8AAAAC/kittycass-peachcat.gif"
          width="50vh"
          height="50vh"
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
  type: PropTypes.string
};
