import styled from "styled-components";

export const WrapperADS = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin: 0 auto;

  @media (max-width: 1330px) {
    width: 96%;
  }

  @media (max-width: 657px) {
    display: none;
  }
`;

export const MainImageADs = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  & img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
  }
`;

export const SmallImageAds = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  & img {
    height: 100%;
    object-fit: cover;
  }
`;

export const CallToActionAds = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  grid-template-columns: minmax(60px, 1fr) 2fr;

  & img {
    margin: 0 auto;
  }
`;

export const ContentCallToAction = styled.div`
  & h3 {
    font-size: 1em;
    font-weight: 100;
  }

  & p {
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 100;
  }
`;

export const BuyNowButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background: #3ea6ff;
  outline: none;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
