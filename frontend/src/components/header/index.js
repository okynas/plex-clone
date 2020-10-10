import React from 'react';
import {Container,} from "./styles/header"

export default function Header({children}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

Header.Container = function HeaderContainer({children}) {
  return <Container>{children}</Container>;
}