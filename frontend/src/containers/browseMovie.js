import React from "react";
import img from "../images/hero.jpg"
import BrowseContainer from "./browseTemplate"

import { FaHome, FaPlus, FaPlay } from 'react-icons/fa';
import Movie from "../components/movie";

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
            <Movie.AgeText text="15" />
            <Movie.Rating>
              <Movie.RatingIcon />
              16%
            </Movie.Rating>
          </Movie.Duration>
          <Movie.ButtonSection>
            <Movie.Link href="/watch/1">
              <Movie.Button icon={<FaPlay/>} text="PLAY"/>
            </Movie.Link>
            <Movie.Button 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="plex-icon-toolbar-mark-played-560" aria-hidden="true" class="PlexIcon-plexIcon-8Tamaj ActionButton-icon-3yhx5u"><path d="M24 44.4C12.7333 44.4 3.59998 35.2666 3.59998 24C3.59998 12.7333 12.7333 3.59998 24 3.59998C35.2666 3.59998 44.4 12.7333 44.4 24C44.4 35.2666 35.2666 44.4 24 44.4ZM24 40.8C33.2784 40.8 40.8 33.2784 40.8 24C40.8 14.7216 33.2784 7.19998 24 7.19998C14.7216 7.19998 7.19998 14.7216 7.19998 24C7.19998 33.2784 14.7216 40.8 24 40.8ZM22.9177 33.9317L13.5646 28.5317L15.3646 25.414L21.6 29.014L30 14.4648L33.1177 16.2648L22.9177 33.9317Z"></path></svg>
              } 
              text="" 
            />
            <Movie.Button icon={null} text="..." />
          </Movie.ButtonSection>
          <Movie.Description text="CIA agent must outrace KGB agent in searching of super weapon lost in Mediterranean." />
          <Movie.DirectedBy></Movie.DirectedBy>

        </Movie.InfoRight>
      </Movie.Info>

      <Movie.Cast></Movie.Cast>

      <Movie.ExtraVideos></Movie.ExtraVideos>
      <Movie.SimilarTitles></Movie.SimilarTitles>
    
      {/* <div className="movieInfo">
        <div className="movieInfoLeft">
            <img src={img}/>
        </div>
        <div className="movieInfoRight">
            <h2>Black Eagle</h2>
            <h3 className="year">1988</h3>
            <div className="duration">
                <p>1 hr 44 min</p>
                <span className="age">15</span>
                <span className="rating">
                    <div id="rating-icon"></div>
                    16%
                </span>
            </div>
            <div className="buttonSection">
                <a href="/watch">
                    <button>
                        <FaPlay/>
                        PLAY
                    </button>
                </a>
                <button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="plex-icon-toolbar-mark-played-560" aria-hidden="true" class="PlexIcon-plexIcon-8Tamaj ActionButton-icon-3yhx5u"><path d="M24 44.4C12.7333 44.4 3.59998 35.2666 3.59998 24C3.59998 12.7333 12.7333 3.59998 24 3.59998C35.2666 3.59998 44.4 12.7333 44.4 24C44.4 35.2666 35.2666 44.4 24 44.4ZM24 40.8C33.2784 40.8 40.8 33.2784 40.8 24C40.8 14.7216 33.2784 7.19998 24 7.19998C14.7216 7.19998 7.19998 14.7216 7.19998 24C7.19998 33.2784 14.7216 40.8 24 40.8ZM22.9177 33.9317L13.5646 28.5317L15.3646 25.414L21.6 29.014L30 14.4648L33.1177 16.2648L22.9177 33.9317Z"></path></svg>
                </button>
                <button>...</button>
            </div>

            <p className="movie-desc">CIA agent must outrace KGB agent in searching of super weapon lost in Mediterranean.</p>

            <div className="directedBy"></div>
        </div>
      </div>
      <div className="cast"></div>
      <div className="extra-videos"></div>
      <div className="similar-titles"></div> */}
      
    </BrowseContainer>
  );
}

