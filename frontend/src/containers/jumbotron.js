import React from "react";
import Jumbotron from "../components/jumbotron";
import {jumbotronLogos as data} from "../constants/jumbotron";

export default function JumbotronContainer () {
  return(
  <Jumbotron.Container>
    <Jumbotron.Title title="Get started"/>
    <Jumbotron.Items>
    {data.map( item => {
      return (
        <Jumbotron.Item key={item.id}>
          <Jumbotron.Image src={item.img} />
          <Jumbotron.Subtitle title={item.name}/>

          <Jumbotron.Wrapper dir={item.dir}>
            <Jumbotron.Text text={item.text} />
            <Jumbotron.Link link={item.link} />
          </Jumbotron.Wrapper>

        </Jumbotron.Item>
      )
    })}
    </Jumbotron.Items>
  </Jumbotron.Container>
  )
}