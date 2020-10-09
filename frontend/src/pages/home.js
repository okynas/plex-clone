import React from 'react';

import {WhyPlex, JumbotronContainer, CompanyContainer} from "../containers"

// import { Feature, OptForm } from '../components';
// import { HeaderContainer } from '../containers/header';
// import { JumbotronContainer } from '../containers/jumbotron';

// import { FaqsContainer } from '../containers/faqs';
// import { FooterContainer } from '../containers/footer';



export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <WhyPlex/>
      <CompanyContainer/>
    </>
  );
}