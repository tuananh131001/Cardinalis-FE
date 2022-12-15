import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ type, message }) {
  // const [open, setOpen] = React.useState(true);

  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center'
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={open}
        autoHideDuration={2000}
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
  message: PropTypes.string.isRequired
};
