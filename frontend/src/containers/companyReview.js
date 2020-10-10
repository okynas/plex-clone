import React from "react";
import CompanyReview from "../components/companyReview";
import { FaStar, FaAndroid, FaApple, FaStarHalfAlt, FaRegStar, FaAmazon, FaTicketAlt } from 'react-icons/fa';

export default function CompanyContainer () {
  return(
    <CompanyReview.Container>
      <CompanyReview.Section>

          <CompanyReview.Text text="...One of the very few products that is rich enough in features to satisfy the media maven, but simple enough that the luddite in the house can find their way around it without frustration."/>
          
          <CompanyReview.LogoWrapper>
            <CompanyReview.SectionLogo src="https://www.plex.tv/wp-content/themes/plex/assets/img/home/press-logos/engadget.svg"/>
            <CompanyReview.SectionLogo src="https://www.plex.tv/wp-content/themes/plex/assets/img/home/press-logos/forbes.svg"/>
            <CompanyReview.SectionLogo src="https://www.plex.tv/wp-content/themes/plex/assets/img/home/press-logos/digitaltrends.svg"/>
            <CompanyReview.SectionLogo src="https://www.plex.tv/wp-content/themes/plex/assets/img/home/press-logos/variety.svg"/>
            <CompanyReview.SectionLogo src="https://www.plex.tv/wp-content/themes/plex/assets/img/home/press-logos/wired.svg"/>
            <CompanyReview.SectionLogo src="https://www.plex.tv/wp-content/themes/plex/assets/img/home/press-logos/gizmodo.svg"/>
            <CompanyReview.SectionLogo src="https://www.plex.tv/wp-content/themes/plex/assets/img/home/press-logos/techcrunch.svg"/>
          </CompanyReview.LogoWrapper>

      </CompanyReview.Section>
      <CompanyReview.PremiumReview>
        
        <CompanyReview.Column>
          <CompanyReview.Title title="Google Play Store" icon={<FaAndroid/>}/>
          <CompanyReview.Subtitle>Reviews</CompanyReview.Subtitle>
          <CompanyReview.NumRating rating="4.1" />
          <span>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
          </span>
          <CompanyReview.Rating rating="171,281"/>
        </CompanyReview.Column>

        <CompanyReview.Column>
          <CompanyReview.Title title="Apple App Store" icon={<FaApple/>}/>
          <CompanyReview.Subtitle>Reviews</CompanyReview.Subtitle>
          <CompanyReview.NumRating rating="4.7" />
          <span>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
          </span>
          <CompanyReview.Rating rating="57,968"/>
        </CompanyReview.Column>
        <CompanyReview.Column>
          <CompanyReview.Title title="Amazon" icon={<FaAmazon/>}/>
          <CompanyReview.Subtitle>Reviews</CompanyReview.Subtitle>
          <CompanyReview.NumRating rating="0.0" />
          <span>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
          </span>
          <CompanyReview.Rating rating="0"/>
        </CompanyReview.Column>
        
        <CompanyReview.Column>
          <CompanyReview.Ticket icon={<FaTicketAlt/>}/>
          <CompanyReview.PremiumText>Go premium and get the best of Plex!</CompanyReview.PremiumText>
          <CompanyReview.Button>GO PREMIUM!</CompanyReview.Button>
        </CompanyReview.Column>

      </CompanyReview.PremiumReview>
    </CompanyReview.Container>
  )
}