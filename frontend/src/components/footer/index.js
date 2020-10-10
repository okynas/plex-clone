import React from 'react';
import {Container, LeftWrapper, RightWrapper, TopSection, BottomSection, Logo, Column, Title, Link, RightSection, LeftSection, Text, Icon} from "./styles/footer"

export default function Footer({children}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

Footer.Container = function FooterContainer({children}) {
  return <Container>{children}</Container>;
}

Footer.RightWrapper = function FooterRightWrapper({children}) {
  return <RightWrapper>{children}</RightWrapper>;
}

Footer.LeftWrapper = function FooterLeftWrapper({children}) {
  return <LeftWrapper>{children}</LeftWrapper>;
}

Footer.RightSection = function FooterRightSection({children}) {
  return <RightSection>{children}</RightSection>;
}

Footer.LeftSection = function FooterLeftSection({children}) {
  return <LeftSection>{children}</LeftSection>;
}

Footer.BottomSection = function FooterBottomSection({children}) {
  return <BottomSection>{children}</BottomSection>;
}

Footer.TopSection = function FooterTopSection({children}) {
  return <TopSection>{children}</TopSection>;
}

Footer.Logo = function FooterLogo({href}) {
  return <Logo src={href}></Logo>
}

Footer.Column = function FooterColumn({children}) {
  return <Column>{children}</Column>;
}

Footer.Link = function FooterLink({text}) {
  return <Link href={`#${text}`}>{text}</Link>;
}

Footer.Icon = function FooterLink({hover, icon}) {
  return <Icon href="#" hover={hover}>{icon}</Icon>;
}

Footer.Title = function FooterTitle({title}) {
  return <Title>{title}</Title>;
}

Footer.Text = function FooterText({children}) {
  return <Text>{children}</Text>;
}