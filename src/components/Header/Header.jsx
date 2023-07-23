import React from 'react';
import Container from '../UI/Container';
import Name from './Name';
import New from './New';

function Header() {
  return (
    <Container className="mb-3 flex w-full items-center gap-6 p-0 md:mb-5 md:px-0 lg:p-0">
      <Name />
      <New />
    </Container>
  );
}

export default Header;
