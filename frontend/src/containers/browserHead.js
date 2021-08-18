import BrowseHeader from "../components/browseHeader";

import React from "react";
import { FaBars, FaSearch, FaTools, FaChromecast, FaUserCircle} from 'react-icons/fa';

export default function BrowserHeadContainer () {
  return(
    <BrowseHeader.Container>
        <BrowseHeader.LeftSection>
        <BrowseHeader.Icon>
            <FaBars/>
        </BrowseHeader.Icon>
        <BrowseHeader.Image src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"></BrowseHeader.Image>
        <BrowseHeader.SearchWrapper>
            <BrowseHeader.Icon>
            <FaSearch/>
            <BrowseHeader.Search></BrowseHeader.Search>
            </BrowseHeader.Icon>
        </BrowseHeader.SearchWrapper>
        </BrowseHeader.LeftSection>

        <BrowseHeader.RightSection>
            <BrowseHeader.RightButton>GO PREMIUM</BrowseHeader.RightButton>
            <BrowseHeader.RightSettings>
            <BrowseHeader.Icon>
            <FaTools/>
            </BrowseHeader.Icon>
            <BrowseHeader.Icon>
            <FaChromecast/>
            </BrowseHeader.Icon>
            <BrowseHeader.Icon>
            <FaUserCircle/>
            </BrowseHeader.Icon>
            </BrowseHeader.RightSettings>
        </BrowseHeader.RightSection>
    </BrowseHeader.Container>
  );
}

