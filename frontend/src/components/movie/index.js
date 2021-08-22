import React from 'react';
import {
  Container, 
  Info
} from "./style/movie"

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

// Movie.InfoLeft = function MovieInfoLeft({children}) {
//   return <InfoLeft>{children}</InfoLeft>;
// }

// Movie.InfoRight = function MovieInfoRight({children}) {
//   return <InfoRight>{children}</InfoRight>;
// }

// Movie.Image = function MovieImage({src}) {
//   return <Image src={src}/>
// }

// Movie.MovieTitle = function MovieTitle({title}) {
//   return <MovieTitle>{title}</MovieTitle>
// }

// Movie.SubTitle = function MovieSubTitle({text}) {
//   return <SubTitle>{text}</SubTitle>
// }

// Movie.Text = function MovieText({text}) {
//   return <Text>{text}</Text>
// }

// Movie.Duration = function MovieDuration({children}) {
//   return <Duration>{children}</Duration>;
// }
