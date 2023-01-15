import * as React from 'react';
import { FlexContainer } from '@/components/Container/Container.styled';
import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import NothingSvg from '@/assets/images/nothing.svg';
import Text from '@/components/Text/Text';

export default function Nothing({ text, subText }) {
  return (
    <FlexContainer height="100%" fd="column" jc="flex-start" gap="0.7em">
      <Image src={NothingSvg} width="70%" />
      <Text type="h4" jc="center" textThemeName="paragraphText" text={text} />
      <Text type="p2" jc="center" textThemeName="subText" text={subText} width="70%" />
    </FlexContainer>
  );
}
Nothing.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string
};
