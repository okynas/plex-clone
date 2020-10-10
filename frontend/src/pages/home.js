import React from 'react';

import {WhyPlex, JumbotronContainer, CompanyContainer, BlogContainer, FooterContainer, HeaderContainer} from "../containers"

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <WhyPlex/>
      <CompanyContainer/>
      <BlogContainer/>
      <FooterContainer/>
    </>
  );
}