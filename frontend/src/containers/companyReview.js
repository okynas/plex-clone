import React from "react";
import CompanyReview from "../components/companyReview";

export default function CompanyContainer () {
  return(
    <CompanyReview.Container>
      <CompanyReview.Section>

          <CompanyReview.SectionWrapper text="...One of the very few products that is rich enough in features to satisfy the media maven, but simple enough that the luddite in the house can find their way around it without frustration."/>
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
      <CompanyReview.PremiumReview></CompanyReview.PremiumReview>
    </CompanyReview.Container>
  )
}