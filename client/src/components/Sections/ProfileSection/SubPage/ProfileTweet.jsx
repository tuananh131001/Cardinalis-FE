import React from 'react'
import PropTypes from 'prop-types'
import { FlexContainer } from '@/components/Container/Container.styled'
import TweetSection from '@/components/Sections/TweetSection/TweetSection';

const ProfileTweet = props => {
  return (
    <FlexContainer fd="column">
      <TweetSection />
    </FlexContainer>
  )
}

ProfileTweet.propTypes = {}

export default ProfileTweet