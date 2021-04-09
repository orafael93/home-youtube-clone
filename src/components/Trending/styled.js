import styled from "styled-components";

export const WrapperMainContent = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  padding-top: 55px;
`;

export const GeneralContent = styled.div`
  position: absolute;
  padding-top: 20px;
  width: 100%;
  padding-left: 240px;
  z-index: 1000;

  @media (max-width: 1330px) {
    padding-left: 72px;
  }

  @media (max-width: 808px) {
    padding-left: 0;
  }
`;
