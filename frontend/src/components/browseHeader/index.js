import React from 'react';
import {Container, LeftSection, RightSection, Image, Icon, Search, SearchWrapper} from "./styles/browseHeader"

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

BrowseHeader.LeftSection = function BrowseHeaderLeftSection({children}) {
  return <LeftSection>{children}</LeftSection>
}

BrowseHeader.RightSection = function BrowseHeaderRightSection({children}) {
  return <RightSection>{children}</RightSection>
}

BrowseHeader.Image = function BrowseHeaderImage({src}) {
  return <Image src={src}/>
}

BrowseHeader.Icon = function BrowseHeaderIcon({icon}) {
  return <Icon>{icon}</Icon>
}

BrowseHeader.Search = function BrowseHeaderSearch({icon}) {
  return <Search></Search>
}

BrowseHeader.SearchWrapper = function BrowseHeaderSearchWrapper ({children}) {
  return <SearchWrapper>{children}</SearchWrapper>
}