import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/Button/Button';
import Text from '@/components/text/Text';
import Input from '@/components/Input/Input';

function Home({ themeToggler }) {
  return (
    <div>
      <Text type="h1" text="Cho sir" size="3em" />
      <Input type="text" placeholder="Hello" />
      <Button onClick={themeToggler}>Click</Button>
    </div>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func
};

export default Home;
