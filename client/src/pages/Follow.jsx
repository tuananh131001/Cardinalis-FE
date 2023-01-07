import React from 'react';
import PropTypes from 'prop-types';
import FollowSection from '@/components/FollowSection/FollowSection';

const Follow = ({ type }) => {
  return <FollowSection type={type}></FollowSection>;
};

Follow.propTypes = {
  type: PropTypes.string.isRequired
};

export default Follow;
