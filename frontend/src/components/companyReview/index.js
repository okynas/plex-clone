import React from 'react';
import {Container, Section, PremiumReview, SectionLogo, SectionWrapper, LogoWrapper} from "./styles/companyReview"

export default function CompanyReview({children, ...restProps}) {
  return(
    <Container>
      {children}
    </Container>
  )
}

CompanyReview.Container = function CompanyReviewContainer({children}) {
  return <Container>{children}</Container>;
}

CompanyReview.Section = function CompanyReviewSection({children}) {
  return <Section>{children}</Section>;
}

CompanyReview.SectionWrapper = function CompanyReviewSectionWrapper({text}) {
  return (
    <SectionWrapper>{text}</SectionWrapper>
  );
}

CompanyReview.LogoWrapper = function CompanyReviewLogoWrapper({children}) {
  return <LogoWrapper>{children}</LogoWrapper>
}

CompanyReview.SectionLogo = function CompanyReviewSectionLogo({src, ...restProps}) {

  return (
    <SectionLogo src={src}></SectionLogo>
  );
}

CompanyReview.PremiumReview = function CompanyReviewPremiumReview({children}) {
  return <PremiumReview>{children}</PremiumReview>;
}
