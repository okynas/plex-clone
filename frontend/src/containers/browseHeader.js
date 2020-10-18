import React from "react";
import BrowseHeader from "../components/browseHeader";
import { FaBars, FaSearch } from 'react-icons/fa';

export default function BrowseHeaderContainer() {
  return (
    <BrowseHeader.Container>
      <BrowseHeader.LeftSection>
        <BrowseHeader.Icon icon={<FaBars/>} />
        <BrowseHeader.Image src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"/>
        <BrowseHeader.SearchWrapper>
          <BrowseHeader.Icon icon={<FaSearch/>} />
          <BrowseHeader.Search/>
        </BrowseHeader.SearchWrapper>
      </BrowseHeader.LeftSection>
      <BrowseHeader.RightSection>
        {/* <p>pp</p> */}
        {/* btn */}
        {/* settings */}
        {/* airplay */}
        {/* user */}
      </BrowseHeader.RightSection>
    </BrowseHeader.Container>
  );
}