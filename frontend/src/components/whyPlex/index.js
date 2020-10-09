import React from 'react';
import {Container, Title, Wrapper, Text, Image, Button, IconWrapper, Section, Icon} from "./styles/whyPlex"

export default function WhyPlex({children, title, ...restProps}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

WhyPlex.Container = function WhyPlexContainer({children}) {
  return <Container>{children}</Container>;
}

WhyPlex.Title = function WhyPlexTitle({title}) {
  return <Title>{title}</Title>;
}

WhyPlex.Wrapper = function WhyPlexWrapper({width, children}) {
  return <Wrapper width={width} >{children}</Wrapper>;
}

WhyPlex.Section = function WhyPlexSection({children}) {
  return <Section >{children}</Section>;
}

WhyPlex.Text = function WhyPlexText({children}) {
  return <Text>{children}</Text>;
}

WhyPlex.Image = function WhyPlexImage({src}) {
  return <Image src={src}/>;
}

WhyPlex.Icon = function WhyPlexIcon({children}) {
  return <Icon>{children}</Icon>;
}

WhyPlex.Button = function WhyPlexButton({text, href}) {
  return <Button href={href}>{text}</Button>;
}

WhyPlex.IconWrapper = function WhyPlexIconWrapper({href, children}) {
  return <IconWrapper href={href}>{children}</IconWrapper>;
}