import React from "react";
import WhyPlex from "../components/whyPlex";
import { FaAmazon, FaAndroid, FaApple, FaChrome, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';

export default function WhyPlexContainer () {
  return(
    <WhyPlex.Container>

      <WhyPlex.Section>

        <WhyPlex.Wrapper width="41%">
          <WhyPlex.Title title="Why Plex?"/>

          <WhyPlex.Text>
            Plex brings together all the media that matters to you. Your personal collection will look beautiful alongside stellar streaming content.
            Enjoy Live TV & DVR, a growing catalog of great web shows, news, and podcasts. It's finally possible to enjoy all the media you love in a
            single app, on any device, no matter where you are.
          </WhyPlex.Text>

          <WhyPlex.Button href="#" text="Go Premium" />

        </WhyPlex.Wrapper>

        <WhyPlex.Wrapper width="58%">
          <WhyPlex.Image src="https://www.plex.tv/wp-content/uploads/2021/12/image-avod-devices-all-may-2021-1440x872.png"/>
        </WhyPlex.Wrapper>

      </WhyPlex.Section>

      <WhyPlex.IconWrapper href="#">

        <WhyPlex.Icon>
          <FaApple style={{width: "20px", height:"20px"}}/>
          APPLE
        </WhyPlex.Icon>

        <WhyPlex.Icon>
          <FaAndroid style={{width: "20px", height:"20px"}}/>
          ANDROID
        </WhyPlex.Icon>

        <WhyPlex.Icon>
          <FaChrome style={{width: "20px", height:"20px"}}/>
          CHROME
        </WhyPlex.Icon>

        <WhyPlex.Icon>
          <FaAmazon style={{width: "20px", height:"20px"}}/>
          AMAZON
        </WhyPlex.Icon>

        <WhyPlex.Icon>
          <FaWindows style={{width: "20px", height:"20px"}}/>
          WINDOWS
        </WhyPlex.Icon>

        <WhyPlex.Icon>
          <FaPlaystation style={{width: "20px", height:"20px"}}/>
          PLAYSTATION
        </WhyPlex.Icon>

        <WhyPlex.Icon>
          <FaXbox style={{width: "20px", height:"20px"}}/>
          XBOX
        </WhyPlex.Icon>

      </WhyPlex.IconWrapper>

    </WhyPlex.Container>
  )
}