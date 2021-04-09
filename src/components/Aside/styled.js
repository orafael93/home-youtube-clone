import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AsideContainer = styled.aside`
  width: ${({ menuactive }) => (menuactive ? "72px" : "240px")};
  position: fixed;
  left: 0;
  height: 100vh;
  background: #202020;
  overflow-y: auto;
  z-index: 10000;

  & p {
    display: ${({ menuactive }) => (menuactive ? "none" : "block")};
    color: rgba(255, 255, 255, 0.3);
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-size: 0.9em;
    padding-left: 25px;
    padding: 30px 0;
    text-align: center;
  }

  @media (max-width: 1330px) {
    width: 72px;
    & p {
      display: none;
    }
  }

  @media (max-width: 808px) {
    left: ${({ menuactive }) => (menuactive ? 0 : "-100%")};
  }
`;

export const WrapperList = styled.ul`
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: ${({ menuactive }) => (menuactive ? "none" : "block")};
  & h4 {
    padding-top: 10px;
    padding-left: 25px;
    padding-bottom: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9em;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  @media (max-width: 1330px) {
    border-bottom: 1px solid transparent;
    padding-bottom: 0;
    &.hide-small {
      display: none;
    }
  }
`;

export const ListItem = styled.li`
  padding: ${({ menuactive }) => (menuactive ? "0" : "0")};
  background: #202020;
`;

export const ListLink = styled(NavLink)`
  display: flex;
  justify-content: ${({ menuactive }) =>
    menuactive ? "center" : "flex-start"};
  align-items: center;
  width: 100%;
  flex-direction: ${({ menuactive }) => (menuactive ? "column" : "row")};
  padding: ${({ menuactive }) => (menuactive ? "12px 0" : "9px 25px")};
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;

  & h3 {
    font-size: ${({ menuactive }) => (menuactive ? "10px" : "14px")};
    margin: ${({ menuactive }) => (menuactive ? "5px 0 0 0" : "0 0 0 25px")};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &.active svg {
    color: #fff;
  }
  &.active h3 {
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 1330px) {
    padding: 12px 0;
    flex-direction: column;
    justify-content: center;

    & h3 {
      margin: 5px 0;
      font-size: 10px;
    }
  }
`;

export const TitleLink = styled.h3`
  color: rgba(255, 255, 255, 1);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  flex: 1;
  margin-left: 25px;

  @media (max-width: 1330px) {
    color: rgba(255, 255, 255, 0.5);
  }
`;
