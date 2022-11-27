import React from 'react';
import Button from '@/components/Button/Button';
import Text from '@/components/text/Text';
import Input from '@/components/Input/Input';

function Home({ themeToggler }) {
  return (
    <div>
      <Text type="h1" text="Nihao Hello" size="3em" />
      <Input />
      <Button onClick={themeToggler}>Click</Button>
    </div>
  );
}

export default Home;
