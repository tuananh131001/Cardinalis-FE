import CustomModal from '@/components/Modals/CustomModal';
import TweetComposeCard from './TweetComposeCard';
import PropTypes from 'prop-types';
import HeaderSection from '@/components/HeaderSection/HeaderSection';

const TweetComposeModal = ({ isOpen, handleCloseModal }) => {
  return (
    <CustomModal
      height="auto"
      padding="1em"
      top="10%"
      transform="translateX(-50%)"
      isOpen={isOpen}
      handleClose={handleCloseModal}>
      {
        <>
          <HeaderSection leftType="close" content="Tweet Compose" onClickClose={handleCloseModal} />
          <TweetComposeCard />
        </>
      }
    </CustomModal>
  );
};
TweetComposeModal.propTypes = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func
};
export default TweetComposeModal;
