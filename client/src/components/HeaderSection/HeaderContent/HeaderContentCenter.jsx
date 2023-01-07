import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import Text from '@/components/Text/Text';

const HeaderContentCenter = ({ content, subContent }) => {
  if (typeof content === 'string' && typeof subContent === 'string')
    return (
      <FlexContainer fd="column" overflow="visible">
        <Text type="p" textThemeName="paragraphText" text={content} className="text" weight="700" />
        <Text type="p2" textThemeName="subText" text={subContent} className="text" />
      </FlexContainer>
    );
  else if (typeof content === 'string' && typeof subContent !== 'string')
    return (
      <Text type="p" textThemeName="paragraphText" text={content} weight="700" className="text" />
    );
  else return content;
};

HeaderContentCenter.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subContent: PropTypes.any
};

export default HeaderContentCenter;
