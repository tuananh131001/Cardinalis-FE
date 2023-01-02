import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { StyledModalBox } from './CustomModal.style';

export default function CustomModal({ isOpen, handleClose, children }) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      {/* <Box sx={style}>{children}</Box> */}
      <StyledModalBox>{children}</StyledModalBox>
    </Modal>
  );
}
CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node
};
