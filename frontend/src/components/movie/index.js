import React from 'react';
import {Container, Info} from "./style/movie"

export default function Movie({children, ...restProps}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

Movie.Container = function MovieContainer({children}) {
  return <Container>{children}</Container>;
}

Movie.Info = function MovieInfo({children}) {
  return <Info>{children}</Info>;
}