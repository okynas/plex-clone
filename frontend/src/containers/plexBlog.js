import React from "react";
import PlexBlog from "../components/plexBlog";
// import { FaAmazon, FaAndroid, FaApple, FaChrome, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';

export default function BlogContainer () {
  return(
  <PlexBlog.Container>
    <PlexBlog.Title title="Plex Blog"/>
    <PlexBlog.BoxContainer>
      
      <PlexBlog.BlogBox href="#" background="https://www.plex.tv/wp-content/uploads/2020/09/hero-blog-live-tv-SPAN-aug-2020-1536x864.jpg">
        <PlexBlog.Overlay>
          <PlexBlog.Date date="September 10, 2020" />
          <PlexBlog.Subtitle title="Live TV FREE" />
          <PlexBlog.Button>ARROW</PlexBlog.Button>
        </PlexBlog.Overlay>
      </PlexBlog.BlogBox>

      {/* <PlexBlog.BlogBox href="#" background="https://www.plex.tv/wp-content/uploads/2020/09/hero-blog-live-tv-SPAN-aug-2020-1536x864.jpg">
        <PlexBlog.Date date="September 10, 2020" />
        <PlexBlog.Subtitle title="TV FREE" />
        <PlexBlog.Button>ARROW</PlexBlog.Button>
      </PlexBlog.BlogBox>

      <PlexBlog.BlogBox href="#" background="https://www.plex.tv/wp-content/uploads/2020/09/hero-blog-live-tv-SPAN-aug-2020-1536x864.jpg">
        <PlexBlog.Date date="September 10, 2020" />
        <PlexBlog.Subtitle title="The one where Plex announces free streaming live tv" />
        <PlexBlog.Button>ARROW</PlexBlog.Button>
      </PlexBlog.BlogBox> */}

    </PlexBlog.BoxContainer>
  </PlexBlog.Container>
  );
}