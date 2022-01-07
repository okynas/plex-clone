import React from "react";
import Header from "../components/header";
import { FaAngleDown, FaBars, FaTv, FaTicketAlt } from 'react-icons/fa';
import { RiMovie2Line, RiFolder4Line } from "react-icons/ri"

export default function JumbotronContainer () {
  return(
    <Header.Container>
      <Header.Overlay>
        <Header.TopSection>

          <Header.NavBar>

            <Header.Menu>
              <FaBars/>
            </Header.Menu>

            <Header.NavBarLeft>
              <Header.NavBarIcon src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"/>
            </Header.NavBarLeft>

            <Header.NavBarMiddle>
              <Header.Dropdown>
                <Header.DropdownTitle text="Live TV" icon={<FaAngleDown/>}/>
              </Header.Dropdown>
              <Header.Dropdown>
                <Header.DropdownTitle text="On Demand" icon={<FaAngleDown/>}/>
              </Header.Dropdown>
              <Header.Dropdown>
                <Header.DropdownTitle text="Your Media" icon={<FaAngleDown/>}/>
              </Header.Dropdown>
              <Header.Dropdown>
                <Header.DropdownTitle text="Community" icon={<FaAngleDown/>}/>
              </Header.Dropdown>
              <Header.Dropdown>
                <Header.DropdownTitle text="Premium" icon={<FaAngleDown/>}/>
              </Header.Dropdown>
            </Header.NavBarMiddle>

            <Header.NavBarRight>
              {/* IF LOGGED IN */}
              { localStorage.getItem('user') &&
              <>
                <Header.RightTitle text="My Account"/>
                <Header.RightButton text="Launch"/>
              </>
              }

              {/* ELSE */}

              { !localStorage.getItem('user') &&
              <>
                <Header.RightTitle text="Sign In"/>
                <Header.RightButton text="Sign Up"/>
              </>
              }
              
              {/* END IF */}
            </Header.NavBarRight>
          </Header.NavBar>

          <Header.Hero>
            <Header.HeroText text="Watch Free Movie and TV on Plex" />
            <Header.HeroButton text="Tune In" />
          </Header.Hero>

        </Header.TopSection>

        <Header.BottomSection>
        <Header.BottomBox>
          <Header.BottomBoxIcon icon={<FaTv/>}/>
          <Header.BottomBoxTitle title="Live TV"/>
          <Header.BottomBoxText text="Stream 80+ channels free. Upgrade to the ultimate TV experience to watch and record local shows, news and sports."/>
          <Header.BottomBoxButton text="Watch Now"/>
        </Header.BottomBox>
        
        <Header.BottomBox>
          <Header.BottomBoxIcon icon={<RiMovie2Line/>}/>
          <Header.BottomBoxTitle title="Free Movie & Shows"/>
          <Header.BottomBoxText text="Stream over 20,000 free on-demand movies and shows from Warner Brothers, Crackle, Lionsgate, MGM and more."/>
          <Header.BottomBoxButton text="Dive In"/>
        </Header.BottomBox>

        <Header.BottomBox>
          <Header.BottomBoxIcon icon={<RiFolder4Line/>}/>
          <Header.BottomBoxTitle title="Your Media"/>
          <Header.BottomBoxText text="Curate and stream your personal collection of movies, TV, music and photos anywhere on all your devices.,"/>
          <Header.BottomBoxButton text="Take Control"/>
        </Header.BottomBox>

        <Header.BottomBox>
          <Header.BottomBoxIcon icon={<FaTicketAlt/>}/>
          <Header.BottomBoxTitle title="Go Premium"/>
          <Header.BottomBoxText text="Become a Plex Pass member today to support our community and experience the gold standard in entertainment."/>
          <Header.BottomBoxButton text="Become a member"/>
        </Header.BottomBox>
        
      </Header.BottomSection>
      </Header.Overlay>
    </Header.Container>
  )
}