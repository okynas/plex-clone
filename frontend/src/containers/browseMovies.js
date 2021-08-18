import React from "react";
import img from "../images/hero.jpg"
import BrowseContainer from "./browseTemplate"
import Browse from "../components/browse";

export default function BrowserMovies () {
  return(
    <BrowseContainer>
      <h2>Recently Added</h2>
      <Browse.Movies>
        <Browse.Movie img={img} title="TITLE1" href="/movie/1"/>
        <Browse.Movie img={img} title="TITLE2" href="/movie/2"/>
      </Browse.Movies>
    </BrowseContainer>
  );
}

