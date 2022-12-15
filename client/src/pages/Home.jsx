import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/Button/Button';

function Home({ themeToggler }) {
  return (
    <div>
      <Button onClick={themeToggler} buttonThemeName="secondaryButton">
        Click
      </Button>
      <h1>HOME NE </h1>
    </div>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func
};

export default Home;
