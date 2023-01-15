import React from 'react';
import RightCardInfoWrapper from './RightCardInfo.styled';
import PropTypes from 'prop-types';
import UserCardSection from '@/components/UserCard/UserCardSection';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nothing from '@/components/LoadingNothing/Nothing';

function RightCardInfo({ type, text, data }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const onClick = () => {
    navigate(`/${user.username + '/' + type}`);
  };
  return (
    <RightCardInfoWrapper>
      <Text type="p" textThemeName="subText" text={text} weight="700" />
      {data?.map((user) => (
        <UserCardSection key={data.id} user={user} sz="medium" />
      ))}
      {data?.length > 3 && (
        <Button onClick={onClick} buttonType="link" fontSize={`var(--font-size-sm)`}>
          Show More
        </Button>
      )}
      {data?.length === 0 && (
        <Nothing
          subText={`No ${type == 'followers' ? type : 'one to follow'} yet`}
          hasImage={false}
        />
      )}
    </RightCardInfoWrapper>
  );
}

RightCardInfo.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default RightCardInfo;
