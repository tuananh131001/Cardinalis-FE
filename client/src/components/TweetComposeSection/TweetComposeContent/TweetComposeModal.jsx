import CustomModal from '@/components/Modals/CustomModal';
import TweetComposeCard from './TweetComposeCard';
import PropTypes from 'prop-types';

const TweetComposeModal = ({ isOpen, handleCloseModal }) => {
  return (
    <CustomModal
      height="auto"
      padding="3em"
      top="10%"
      transform="translateX(-50%)"
      isOpen={isOpen}
      handleClose={handleCloseModal}>
      {<TweetComposeCard />}
    </CustomModal>
  );
};
TweetComposeModal.propTypes = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func
};
export default TweetComposeModal;
