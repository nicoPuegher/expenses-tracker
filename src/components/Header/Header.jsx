import React from 'react';
import Container from '../UI/Container';
import Name from './Name';
import New from './New';

function Header() {
  return (
    <Container className="mb-3 flex w-full items-center gap-6 p-0 md:mb-4 md:p-0 lg:p-0 2xl:mb-5">
      <Name />
      <New />
    </Container>
  );
}

export default Header;
