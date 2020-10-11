import React from "react";
import Header from "../components/header";
import { FaAngleDown, FaBars, FaTv } from 'react-icons/fa';

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
              <Header.RightTitle text="My Account"/>
              <Header.RightButton text="Launch"/>
            </Header.NavBarRight>
          </Header.NavBar>

          <Header.Hero>
            <Header.HeroText text="Stream Free Live TV on Plex" />
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
          <Header.BottomBoxIcon icon={<FaTv/>}/>
          <Header.BottomBoxTitle title="Live TV"/>
          <Header.BottomBoxText text="Stream 80+ channels free. Upgrade to the ultimate TV experience to watch and record local shows, news and sports."/>
          <Header.BottomBoxButton text="Watch Now"/>
        </Header.BottomBox>

        <Header.BottomBox>
          <Header.BottomBoxIcon icon={<FaTv/>}/>
          <Header.BottomBoxTitle title="Live TV"/>
          <Header.BottomBoxText text="Stream 80+ channels free. Upgrade to the ultimate TV experience to watch and record local shows, news and sports."/>
          <Header.BottomBoxButton text="Watch Now"/>
        </Header.BottomBox>

        <Header.BottomBox>
          <Header.BottomBoxIcon icon={<FaTv/>}/>
          <Header.BottomBoxTitle title="Live TV"/>
          <Header.BottomBoxText text="Stream 80+ channels free. Upgrade to the ultimate TV experience to watch and record local shows, news and sports."/>
          <Header.BottomBoxButton text="Watch Now"/>
        </Header.BottomBox>
        
      </Header.BottomSection>
      </Header.Overlay>
    </Header.Container>
  )
}