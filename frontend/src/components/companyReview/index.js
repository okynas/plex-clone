import React from 'react';
import {Container, Section, PremiumReview, SectionLogo, Text, LogoWrapper, Column, Title, Ticket, Subtitle, Rating, NumRating, Button, PremiumText} from "./styles/companyReview"
import { FaStar, FaStarHalf} from 'react-icons/fa';

export default function CompanyReview({children}) {
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

CompanyReview.Text = function CompanyReviewText({text}) {
  return <Text>{text}</Text>;
}

CompanyReview.LogoWrapper = function CompanyReviewLogoWrapper({children}) {
  return <LogoWrapper>{children}</LogoWrapper>
}

CompanyReview.SectionLogo = function CompanyReviewSectionLogo({src}) {
  return <SectionLogo src={src}></SectionLogo>;
}

CompanyReview.PremiumReview = function CompanyReviewPremiumReview({children}) {
  return <PremiumReview>{children}</PremiumReview>;
}

CompanyReview.Column = function CompanyReviewColumn({children}) {
  return <Column>{children}</Column>;
}

// RATING

CompanyReview.Title = function CompanyReviewTitle({icon, title}) {
  return <Title>{icon}{title}</Title>;
}

CompanyReview.Ticket = function CompanyReviewTicket({icon}) {
  return <Ticket>{icon}</Ticket>;
}

CompanyReview.Subtitle = function CompanyReviewSubtitle({children}) {
  return <Subtitle>{children}</Subtitle>;
}

CompanyReview.NumRating = function CompanyReviewNumRating({rating}) {
  return <NumRating>{rating}</NumRating>;
}

CompanyReview.Rating = function CompanyReviewRating({rating}) {
  return <Rating>{rating} ratings</Rating>;
}

CompanyReview.Button = function CompanyReviewButton({children}) {
  return <Button>{children}</Button>;
}

CompanyReview.PremiumText = function CompanyReviewPremiumText({children}) {
  return <PremiumText>{children}</PremiumText>;
}