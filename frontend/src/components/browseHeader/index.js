import React from 'react';
import {Container, } from "./styles/browseHeader"

export default function BrowseHeader({children}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

BrowseHeader.Container = function BrowseHeaderContainer({children}) {
  return <Container>{children}</Container>;
}
