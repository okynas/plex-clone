import React from 'react';
import {Container, Video, BackButton} from "./styles/watch"

export default function Watch({children, ...restProps}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

Watch.Container = function WatchContainer({children}) {
  return <Container>{children}</Container>;
}

Watch.Video = function WatchVideo({src}) {
  return <Video src={src} autoPlay={true} controls></Video>;
}

Watch.BackButton = function WatchBackButton({icon}) {
  return <BackButton href="/browse">{icon}</BackButton>;
}