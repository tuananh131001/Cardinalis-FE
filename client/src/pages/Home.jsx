import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/Button/Button';
import Text from '@/components/text/Text';
import { Input } from '@/components/Input/Input';
import { FaBeer } from 'react-icons/fa';
import Form from '@/components/Form/Form';

function Home({ themeToggler }) {
  const click = () => {
    console.log('click');
  };
  return (
    <div>
      <Text type="h1" text="Cho sir" size="3em" />
      <Form type="login" />
      <Input inputType="textIcon" inputName="homeInput" placeholder="Hello" onClick={click}>
        <FaBeer />
      </Input>
      <Button onClick={themeToggler}>Click</Button>
    </div>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func
};

export default Home;
