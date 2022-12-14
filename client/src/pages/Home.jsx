import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/Button/Button';

function Home({ themeToggler }) {
  const click = () => {
    console.log('click');
  };
  return (
    <div>
      <Button onClick={themeToggler} buttonThemeName="secondaryButton">Click</Button>
    </div>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func
};

export default Home;
