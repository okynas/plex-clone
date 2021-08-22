import React from "react";
import Watch from "../components/watch";

import {FaArrowLeft} from "react-icons/fa"

import video from "../videos/video.mp4"

export default function WatchWrapper() {
  return(
  <Watch.Container>
    {/* <p>watch</p> */}
    {/* <video src={video}></video> */}
    <Watch.BackButton icon={<FaArrowLeft/>}/>
    <Watch.Video src={video} />
  </Watch.Container>
  )
}