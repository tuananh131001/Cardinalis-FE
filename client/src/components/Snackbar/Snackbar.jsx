import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import uuid from 'react-uuid';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  type,
  message,
  isOpen = null,
  onClose = null,
  verticalPosition = 'top',
  horizontalPosition = 'center',
  ...props
}) {
  const [open, setState] = useState(true);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setState(false);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: '100%', ...props }}>
      <Snackbar
        anchorOrigin={{ vertical: verticalPosition, horizontal: horizontalPosition }}
        key={uuid()}
        open={isOpen == null ? open : isOpen}
        autoHideDuration={2500}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={type === 'error' ? 'error' : 'success'}
          sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}

CustomizedSnackbars.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  verticalPosition: PropTypes.string,
  horizontalPosition: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
