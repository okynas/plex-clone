import React from 'react';
import {Container, Content, Aside, Link, Main, Movie, Movies, Row, Overlay, MovieImg} from "./styles/browse"

import { FaPlayCircle } from 'react-icons/fa';

export default function Browse({children}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

Browse.Container = function BrowseContainer({children}) {
  return <Container>{children}</Container>;
}

Browse.Content = function BrowseContent({children}) {
  return <Content>{children}</Content>
}

Browse.Aside = function BrowserAside({children}) {
  return <Aside>{children}</Aside>
}

Browse.Link = function BrowserLink({href, status, setActiveStatus, activeStatus, icon}) {
  return (
    <Link 
      href={href} 
      className={ (activeStatus == status ) ? "active" : ""} 
      onClick={() => { setActiveStatus(status) }}
    >
      {icon}
    </Link>
  )
}

Browse.Main = function BrowserMain({children}) {
  return <Main>{children}</Main>
}

Browse.Row = function BrowserRow({children}) {
  return <Row>{children}</Row>
}

Browse.Movies = function BrowserMovies({children}) {
  return <Movies>{children}</Movies>
}

Browse.Overlay = function BrowserOverlay({children}) {
  return <Overlay>{children}</Overlay>
}
  
Browse.MovieImg = function BrowserMovieImg({img}) {
  return <MovieImg />
}

Browse.Movie = function BrowserMovie({img, title, href}) {
  return (
    <Movie href={href}>
      <Overlay>
        <FaPlayCircle/>
      </Overlay>

      <MovieImg src={img} />

      <p>{title}</p>
      
    </Movie>
  );
}
