import React from 'react';
import {
  Container,
  Info,
  InfoLeft,
  InfoRight,
  Image,
  MovieTitle,
  SubTitle,
  Text,
  Duration,
  Rating,
  ButtonSection,
  Button,
  Link,
  Description,
  DirectedBy,
  Cast,
  SimilarTitles,
  ExtraVideos,
  CastImage,
  CastName,
  CastRole,
  Person,
  SimilarWrapper,
  CastWrapper

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

Movie.InfoLeft = function MovieInfoLeft({children}) {
  return <InfoLeft>{children}</InfoLeft>;
}

Movie.InfoRight = function MovieInfoRight({children}) {
  return <InfoRight>{children}</InfoRight>;
}

Movie.Image = function MovieImage({src}) {
  return <Image src={src}/>
}

Movie.MovieTitle = function MovieMovieTitle({title}) {
  return <MovieTitle>{title}</MovieTitle>
}

Movie.SubTitle = function MovieSubTitle({text}) {
  return <SubTitle>{text}</SubTitle>
}

Movie.Text = function MovieText({text}) {
  return <Text>{text}</Text>
}

Movie.Duration = function MovieDuration({children}) {
  return <Duration>{children}</Duration>;
}

Movie.Rating = function MovieRating({score, icon}) {
  return <Rating>{icon}{score}</Rating>;
}

Movie.ButtonSection = function MovieButtonSection({children}) {
  return <ButtonSection>{children}</ButtonSection>;
}

Movie.Link = function MovieLink({href, children}) {
  return <Link href={href}>{children}</Link>;
}

Movie.Button = function MovieButton({icon, text}) {
  return <Button>{icon}{text}</Button>;
}

Movie.Description = function MovieDescription({text}) {
  return <Description>{text}</Description>;
}

Movie.DirectedBy = function MovieDirectedBy({children}) {
  return <DirectedBy>{children}</DirectedBy>;
}

Movie.Cast = function MovieCast({children}) {
  return <Cast>{children}</Cast>;
}

Movie.ExtraVideos = function MovieExtraVideos({children}) {
  return <ExtraVideos>{children}</ExtraVideos>;
}

Movie.SimilarTitles = function MovieSimilarTitles({children}) {
  return <SimilarTitles>{children}</SimilarTitles>;
}

Movie.Person = function MoviePerson({children}) {
  return <Person>{children}</Person>;
}
Movie.CastImage = function MovieCastImage({src}) {
  return <CastImage src={src} />
}
Movie.CastName = function MovieCastName({name}) {
  return <CastName>{name}</CastName>;
}
Movie.CastRole = function MovieCastRole({role}) {
  return <CastRole>{role}</CastRole>;
}

Movie.SimilarWrapper = function MovieSimilarWrapper({children}) {
  return <SimilarWrapper>{children}</SimilarWrapper>;
}

Movie.CastWrapper = function MovieCastWrapper({children}) {
  return <CastWrapper>{children}</CastWrapper>;
}