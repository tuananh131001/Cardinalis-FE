import React from 'react';
import RightCardInfoWrapper from './RightCardInfo.styled';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';

function RightCardInfo({ text }) {
  return (
    <RightCardInfoWrapper>
      <Text type="h2" text={text} />
      <Button ta="capitalizer" color="#DC6C14">
        Show more
      </Button>
    </RightCardInfoWrapper>
  );
}

RightCardInfo.propTypes = {
  text: PropTypes.string.isRequired
};

export default RightCardInfo;
