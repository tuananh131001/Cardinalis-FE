import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node
};
export default ProtectedRoutes;
