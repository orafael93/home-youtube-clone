import React from "react";
import adsImage from "../../images/ads-image.jpg";
import adsImageSmall from "../../images/ads-image-small.png";
import adsEnterprise from "../../images/ads-enterprise.png";
import {
  WrapperADS,
  MainImageADs,
  SmallImageAds,
  CallToActionAds,
  BuyNowButton,
  ContentCallToAction,
} from "./styled";

const ADS = () => {
  return (
    <WrapperADS>
      <MainImageADs>
        <img src={adsImage} alt="" />
      </MainImageADs>
      <SmallImageAds>
        <img src={adsImageSmall} alt="" />
      </SmallImageAds>
      <CallToActionAds>
        <img src={adsEnterprise} alt="" />
        <ContentCallToAction>
          <h3>New Galaxy S20 FE</h3>
          <p>Samsung Brazil</p>
          <BuyNowButton>Buy now</BuyNowButton>
        </ContentCallToAction>
      </CallToActionAds>
    </WrapperADS>
  );
};

export default ADS;
