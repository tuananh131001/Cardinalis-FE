import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MainNavContent from '@/components/NavSection/MainHome/MainNavContent/MainNavContent';
import PropTypes from 'prop-types';

export default function SideBarMobile({ isOpen, setOpen, setClose, user, currentTab }) {
  // const list = () => (
  //   <Box sx={{ width: 250 }} role="presentation">
  //     {children}
  //   </Box>
  // );

  return (
    <SwipeableDrawer anchor={'left'} open={isOpen} onClose={setClose} onOpen={setOpen}>
      <MainNavContent user={user} currentTab={currentTab} />
    </SwipeableDrawer>
  );
}
SideBarMobile.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  user: PropTypes.object,
  currentTab: PropTypes.string
};
