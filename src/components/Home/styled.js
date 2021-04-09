import styled from "styled-components";

export const WrapperVideos = styled.div`
  display: grid;
  grid-template-columns: ${({ menuactive }) =>
    menuactive
      ? "repeat(auto-fit, minmax(300px, 1fr))"
      : "repeat(4, minmax(240px, 1fr))"};
  gap: 20px;
  width: 100%;
  padding: 30px 2em;

  @media (max-width: 1145px) {
    padding: 30px 1em;
    grid-template-columns: repeat(3, minmax(240px, 1fr));
  }

  @media (max-width: 889px) {
    gap: 10px;
    padding: 30px 0.5em;
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }

  @media (max-width: 515px) {
    gap: 10px;
    padding: 30px 4em;
    grid-template-columns: repeat(1, minmax(240px, 1fr));
  }
`;

export const WrapperMainContent = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  padding-top: 55px;
`;

export const GeneralContent = styled.div`
  position: absolute;
  padding-top: 20px;
  width: 100%;
  padding-left: ${({ menuactive }) => (menuactive ? "3em" : "240px")};
  z-index: 1000;

  @media (max-width: 1330px) {
    padding-left: 72px;
  }

  @media (max-width: 808px) {
    padding-left: 0;
  }
`;
