import React from 'react';
import {Container, Title, BlogBox, BoxContainer, Date, Subtitle, Button, Overlay} from "./styles/plexBlog"

export default function PlexBlog({children, ...restProps}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

PlexBlog.Container = function PlexBlogContainer({children}) {
  return <Container>{children}</Container>;
}

PlexBlog.Overlay = function PlexBlogOverlay({}) {
  return <Overlay/>;
}

PlexBlog.Title = function PlexBlogTitle({title}) {
  return <Title>{title}</Title>;
}

PlexBlog.BlogBox = function PlexBlogBlogBox({children, background, href}) {
  return <BlogBox href={href} background={background}>{children}</BlogBox>;
}

PlexBlog.BoxContainer = function PlexBlogBoxContainer({children}) {
  return <BoxContainer>{children}</BoxContainer>;
}

PlexBlog.Date = function PlexBlogBoxDate({date}) {
  return <Date>{date}</Date>
}

PlexBlog.Subtitle = function PlexBlogBoxSubtitle({title}) {
  return <Subtitle>{title}</Subtitle>
}

PlexBlog.Button = function PlexBlogBoxButton({children}) {
  return <Button>{children}</Button>
}

