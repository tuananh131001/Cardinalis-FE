import React from 'react';
import Button from '@/components/Button/Button';

function Home({ themeToggler }) {
  return (
    <div>
      <Button onClick={themeToggler}>Click</Button>
    </div>
  );
}

export default Home;
