import React from 'react';
import {Container, Title, Subtitle, Image, Items, Item, Text, Link, Wrapper} from "./styles/footer"

export default function Footer({children, ...restProps}) {
  return(
    <Container>
      {/* <Title title={title} /> */}
      {children}
    </Container>
  )
}

Footer.Container = function FooterContainer({children}) {
  return <Container>{children}</Container>;
}