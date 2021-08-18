import React, { useState } from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';

import Browse from "../components/browse";
import BrowserHeadContainer from "./browserHead"

import '../style/browse.css';

export default function BrowseContainer({children}) {
    const [activeStatus, setActiveStatus] = useState("home");

    return (
    <Browse.Container>  
      <BrowserHeadContainer/>
      <Browse.Content>
        <Browse.Aside>
          <Browse.Link href="/browse" status="home" icon={<FaHome/>} activeStatus={activeStatus} setActiveStatus={setActiveStatus}/>
          <Browse.Link href="#" status="add" icon={  <FaPlus/>} activeStatus={activeStatus} setActiveStatus={setActiveStatus}/>
        </Browse.Aside>
        <Browse.Main>
          <Browse.Row>
            {children}
          </Browse.Row>
        </Browse.Main>
      </Browse.Content>
    </Browse.Container>
    );
}