import React from "react";
import Aside from "../Aside";
import { WrapperVideos } from "./styled";
import { GeneralContent, WrapperMainContent } from "./styled";
import ADS from "../Ads";
import Video from "../Video";

const Home = ({ menuActive }) => {
  return (
    <WrapperMainContent>
      <Aside menuActive={menuActive} />
      <GeneralContent menuactive={menuActive ? 1 : 0}>
        <ADS />
        <WrapperVideos menuactive={menuActive ? 1 : 0}>
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </WrapperVideos>
      </GeneralContent>
    </WrapperMainContent>
  );
};

export default Home;
