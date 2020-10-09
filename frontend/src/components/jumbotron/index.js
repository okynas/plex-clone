import React from 'react';
import {Container, Title, Subtitle, Image, Items, Item, Text, Link, Wrapper} from "./styles/jumbotron"

export default function Jumbotron({children, title, ...restProps}) {
  return(
    <Container>
      <Title title={title} />
      {children}
    </Container>
  )
}

Jumbotron.Container = function JumbotronContainer({children}) {
  return <Container>{children}</Container>;
}

Jumbotron.Wrapper = function JumbotronWrapper({dir, children}) {
  return <Wrapper dir={dir}>{children}</Wrapper>;
}

Jumbotron.Items = function JumbotronItems({children}) {
  return <Items>{children}</Items>;
}

Jumbotron.Item = function JumbotronItem({children}) {
  return <Item>{children}</Item>;
}

Jumbotron.Title = function JumbotronTitle({title}) {
  return <Title>{title}</Title>;
}

Jumbotron.Subtitle = function JumbotronSubtitle({title}) {
  return <Subtitle>{title}</Subtitle>;
}

Jumbotron.Text = function JumbotronText({text, children}) {
  return <Text>{text} {children}</Text>;
}

Jumbotron.Image = function JumbotronImage({src}) {
  return <Image src={src}/>;
}

Jumbotron.Link = function JumbotronLink({link}) {
  return <Link href="/">{link}</Link>
}

