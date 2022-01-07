import React from "react";
import img from "../images/hero.jpg"
import BrowseContainer from "./browseTemplate"

import { FaPlay , FaStar} from 'react-icons/fa';
import Movie from "../components/movie";
import Browse from "../components/browse";

export default function BrowserMovie () {
  return(
    <BrowseContainer>

      <Movie.Info>
        <Movie.InfoLeft>
          <Movie.Image src={img} />
        </Movie.InfoLeft>
        <Movie.InfoRight>
          <Movie.MovieTitle title="Black Eagle" />
          <Movie.SubTitle text="1988" />
          <Movie.Duration>
            <Movie.Text text="1hr 44min" />
            <Movie.Text text="15" />
            <Movie.Rating score="16%" icon={<FaStar/>}/>
          </Movie.Duration>
          <Movie.ButtonSection>
            <Movie.Link href="/watch/1">
              <Movie.Button icon={<FaPlay/>} text="PLAY"/>
            </Movie.Link>
            <Movie.Button
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="plex-icon-toolbar-mark-played-560" aria-hidden="true" className="PlexIcon-plexIcon-8Tamaj ActionButton-icon-3yhx5u"><path d="M24 44.4C12.7333 44.4 3.59998 35.2666 3.59998 24C3.59998 12.7333 12.7333 3.59998 24 3.59998C35.2666 3.59998 44.4 12.7333 44.4 24C44.4 35.2666 35.2666 44.4 24 44.4ZM24 40.8C33.2784 40.8 40.8 33.2784 40.8 24C40.8 14.7216 33.2784 7.19998 24 7.19998C14.7216 7.19998 7.19998 14.7216 7.19998 24C7.19998 33.2784 14.7216 40.8 24 40.8ZM22.9177 33.9317L13.5646 28.5317L15.3646 25.414L21.6 29.014L30 14.4648L33.1177 16.2648L22.9177 33.9317Z"></path></svg>
              }
              text=""
            />
            <Movie.Button icon="" text="..." />
          </Movie.ButtonSection>
          <Movie.Description text="CIA agent must outrace KGB agent in searching of super weapon lost in Mediterranean." />
          <Movie.DirectedBy></Movie.DirectedBy>

        </Movie.InfoRight>
      </Movie.Info>

      <Movie.Cast>

      <p>Person assosiated:</p>
        <Movie.CastWrapper>
          <Movie.Person>
            <Movie.CastImage src="https://images.plex.tv/photo?size=medium-240&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F1%2Fpeople%2F1c7cae40782be9638aee6a2a04f12926.jpg"/>
            <Movie.CastName name="Nazneen Contractor" />
            <Movie.CastRole role="Layla Hourani" />
          </Movie.Person>

          <Movie.Person>
            <Movie.CastImage src="https://images.plex.tv/photo?size=medium-240&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F1%2Fpeople%2F1c7cae40782be9638aee6a2a04f12926.jpg"/>
            <Movie.CastName name="Nazneen Contractor" />
            <Movie.CastRole role="Layla Hourani" />
          </Movie.Person>
        </Movie.CastWrapper>

      </Movie.Cast>

      <Movie.ExtraVideos></Movie.ExtraVideos>

      <Movie.SimilarTitles>
        <p>Similar Titles:</p>
        <Movie.SimilarWrapper>
          <Browse.Movie img={img} title="TITLE1" href="/movie/1"/>
          <Browse.Movie img={img} title="TITLE2" href="/movie/2"/>
        </Movie.SimilarWrapper>
      </Movie.SimilarTitles>

    </BrowseContainer>
  );
}

