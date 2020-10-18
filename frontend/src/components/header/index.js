import React from 'react';
import {Container, TopSection, Overlay, NavBar, NavBarLeft, NavBarIcon, NavBarMiddle, Dropdown, 
  Menu, NavBarRight, RightButton, RightTitle, Hero, HeroText, HeroButton, DropdownTitle,
  BottomSection, BottomBox, BottomBoxButton, BottomBoxIcon, BottomBoxTitle, BottomBoxText} from "./styles/header"

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

Header.TopSection = function HeaderTopSection({children}) {
  return <TopSection>{children}</TopSection>;
}

Header.Overlay = function HeaderOverlay({children}) {
  return <Overlay>{children}</Overlay>;
}

Header.NavBar = function HeaderNavBar({children}) {
  return <NavBar>{children}</NavBar>;
}

Header.NavBarLeft = function HeaderNavBarLeft({children}) {
  return <NavBarLeft>{children}</NavBarLeft>;
}

Header.NavBarIcon = function HeaderNavBarIcon({src, children}) {
  return <NavBarIcon src={src}>{children}</NavBarIcon>;
}

Header.NavBarMiddle = function HeaderNavBarMiddle({children}) {
  return <NavBarMiddle>{children}</NavBarMiddle>;
}

Header.Dropdown = function HeaderDropdown({text, children}) {
  return <Dropdown>{children}</Dropdown>;
}

Header.Menu = function HeaderMenu({children}) {
  return <Menu>{children}</Menu>;
}

Header.DropdownTitle = function HeaderDropdownTitle({text, icon}) {
return <DropdownTitle href={`#${text}`}>{text} {icon}</DropdownTitle>;
}


// Header.DropdownLink = function HeaderDropdownLink({text}) {
//   return <DropdownLink href={`#${text}`}>{text}</DropdownLink>;
// }

Header.NavBarRight = function HeaderNavBarRight({children}) {
  return <NavBarRight>{children}</NavBarRight>;
}

Header.RightTitle = function HeaderRightTitle({text}) {
  return <RightTitle href={`#${text}`}>{text}</RightTitle>;
}

Header.RightButton = function HeaderRightButton({text}) {
  return <RightButton href="/browse">{text}</RightButton>;
}

// HERO
Header.Hero = function HeaderHero({children}) {
  return <Hero>{children}</Hero>;
}

Header.HeroText = function HeaderHeroText({text}) {
  return <HeroText>{text}</HeroText>;
}

Header.HeroButton = function HeaderHeroButton({text}) {
  return <HeroButton>{text}</HeroButton>;
}

// Bottom section
Header.BottomSection = function HeaderBottomSection({children}) {
  return <BottomSection>{children}</BottomSection>;
}

Header.BottomBox = function HeaderBottomBox({children}) {
  return <BottomBox>{children}</BottomBox>;
}

Header.BottomBoxIcon = function HeaderBottomBoxIcon({icon}) {
  return <BottomBoxIcon>{icon}</BottomBoxIcon>;
}

Header.BottomBoxTitle = function HeaderBottomBoxTitle({title}) {
  return <BottomBoxTitle>{title}</BottomBoxTitle>;
}

Header.BottomBoxText = function HeaderBottomBoxText({text}) {
  return <BottomBoxText>{text}</BottomBoxText>;
}

Header.BottomBoxButton = function HeaderBottomBoxButton({text}) {
  return <BottomBoxButton>{text}</BottomBoxButton>;
}

