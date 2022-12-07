import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/Button/Button';
import Text from '@/components/text/Text';
import Form from '@/components/Form/Form';

function Home({ themeToggler }) {
  const click = () => {
    console.log('click');
  };
  return (
    <div>
      <Text type="h1" text="Cho sir" size="3em" />
      <Form type="register" />
      <Button onClick={themeToggler} buttonThemeName="secondaryButton">Click</Button>
    </div>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func
};

export default Home;
