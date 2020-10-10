import React from "react";
import Footer from "../components/footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function FooterContainer () {
  return(
  <Footer.Container>
    <Footer.TopSection>
      <Footer.LeftWrapper>
        <Footer.Logo href="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"/>
      </Footer.LeftWrapper>
      <Footer.RightWrapper>
        
        <Footer.Column>
          <Footer.Title title="Company" />
          <Footer.Link text="Our Teams" />
          <Footer.Link text="Careers" />
          <Footer.Link text="Charity" />
          <Footer.Link text="Plex Labs" />
          <Footer.Link text="Press Room" />
          <Footer.Link text="Partners" />
          <Footer.Link text="CordCutter" />
          <Footer.Link text="Plex Gear" />
        </Footer.Column>

        <Footer.Column>
          <Footer.Title title="Plex Pass" />
          <Footer.Link text="Go Premium" />
          <Footer.Link text="Perks" />
        </Footer.Column>
        
        <Footer.Column>
          <Footer.Title title="Downloads" />
          <Footer.Link text="Plex Media Server" />
          <Footer.Link text="Apps & Devices" />
        </Footer.Column>

        <Footer.Column>
          <Footer.Title title="Support" />
          <Footer.Link text="Articles" />
          <Footer.Link text="Forums" />
          <Footer.Link text="Billing Questions" />
          <Footer.Link text="Status" />
          <Footer.Link text="Bug Bounty" />
        </Footer.Column>

        <Footer.Column>
          <Footer.Title title="Blogs" />
          <Footer.Link text="The Watch List" />
        </Footer.Column>

        <Footer.Column>
          <Footer.Title title="Contact" />
        </Footer.Column>

      </Footer.RightWrapper>
    </Footer.TopSection>
    <Footer.BottomSection>
      <Footer.LeftSection>
        
        <Footer.Text>
          Copyright &copy; 2020 Plex  
          <Footer.Link text="Privacy & Legal" />
        </Footer.Text>

        <Footer.Text>
          <Footer.Link text="AdChoices" />
        </Footer.Text>

        <Footer.Text>
          Language: 
          <Footer.Link text="English (US)" />
        </Footer.Text>

      </Footer.LeftSection>
      <Footer.RightSection>
        <Footer.Icon hover="#1DA1F2" icon={<FaTwitter style={{width: "20px", height: "20px"}}/>} />
        <Footer.Icon hover="#4267B2" icon={<FaFacebookF style={{width: "20px", height: "20px"}}/>} />
        <Footer.Icon hover="#F56040" icon={<FaInstagram style={{width: "20px", height: "20px"}}/>} />
        <Footer.Icon hover="#2867B2" icon={<FaLinkedinIn style={{width: "20px", height: "20px"}}/>} />
        <Footer.Icon hover="#FF0000" icon={<FaYoutube style={{width: "20px", height: "20px"}}/>} />
      </Footer.RightSection>
    </Footer.BottomSection>
  </Footer.Container>
  )
}