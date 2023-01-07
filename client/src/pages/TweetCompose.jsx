import { FlexContainer } from '@/components/Container/Container.styled';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import { useOutletContext } from 'react-router-dom';
import CustomModal from '@/components/Modals/CustomModal';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import TweetInputCard from '@/components/TweetSection/TweetInputCard';

const TweetCompose = ({ isModal = false, theme, themeToggler, user }) => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate(-1);
  };
  if (isModal) {
    return (
      <CustomModal
        height="auto"
        padding="3em"
        top="10%"
        transform="translateX(-50%)"
        isOpen={true}
        handleClose={handleCloseModal}>
        {
          <TweetComposeContent
            theme={theme}
            themeToggler={themeToggler}
            isModal={isModal}
            handleCloseModal={handleCloseModal}
            user={user}
          />
        }
      </CustomModal>
    );
  } else {
    const { theme, themeToggler, user } = useOutletContext();
    return (
      <TweetComposeContent
        theme={theme}
        themeToggler={themeToggler}
        isModal={isModal}
        user={user}
      />
    );
  }
};
const TweetComposeContent = ({ theme, themeToggler, user, isModal, handleCloseModal }) => {
  return (
    <FlexContainer fd="column" gridArea="main">
      <HeaderSection
        content=""
        haveBackButton={!isModal}
        haveCloseButton={isModal}
        onClickClose={handleCloseModal}
        zIndex={2}
        theme={theme}
        themeToggler={themeToggler}
      />
      <TweetInputCard user={user} />
    </FlexContainer>
  );
};

TweetCompose.propTypes = {
  isModal: PropTypes.bool,
  theme: PropTypes.string,
  themeToggler: PropTypes.func,
  user: PropTypes.object
};
TweetComposeContent.propTypes = {
  theme: PropTypes.string,
  themeToggler: PropTypes.func,
  handleCloseModal: PropTypes.func,
  user: PropTypes.object,
  isModal: PropTypes.bool
};
export default TweetCompose;
