import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { Search as S } from "@styled-icons/heroicons-solid/Search";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background: rgba(32, 32, 32, 0.7);
  z-index: 5000;
`;

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr minmax(200px, 0.99fr) 1fr;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  background: rgba(32, 32, 32, 0.7);
  @media (max-width: 657px) {
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
`;

export const LogoAndHamburguer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 185px;
  padding: 0 20px;
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    width: 100%;
    padding: 5px 15px;
    outline: none;
    background: #121212;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-right-color: transparent;
    color: rgba(255, 255, 255, 0.88);
    font-size: 1em;
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    &:focus {
      border-color: rgba(62, 166, 255, 0.6);
    }
  }

  & button {
    background: #323232;
    padding: 9px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    &:hover svg {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  @media (max-width: 657px) {
    display: none;
  }
`;

export const MultipleIcons = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr) 1.5fr;
  justify-content: flex-end;
  align-items: center;
  & > div {
    display: grid;
    grid-template-columns: repeat(3, minmax(30px, 40px)) minmax(105px, 1fr);
    gap: 8px;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    margin-right: 16px;
    margin-left: 16px;
    & > svg {
      display: flex;
      margin: 0 auto;
      cursor: pointer;
    }
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;

  & span {
    text-transform: uppercase;
    color: #3ea6ff;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    font-size: 0.9em;
  }
`;

// HAMBURGUER

export const MenuHamburguer = styled(Menu)`
  color: #eee;
  margin-right: 20px;
  cursor: pointer;
  padding: 1px;
`;

export const LogoImage = styled(Link)`
  position: relative;
  &::after {
    content: "BR";
    position: absolute;
    top: -3px;
    right: -15px;
    color: #aaa;
    font-size: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

// SEARCH

export const Search = styled(S)`
  color: rgba(255, 255, 255, 0.3);
`;

// USER IMAGE LOGIN

export const UserLoginImage = styled(UserCircle)`
  color: #3ea6ff;
`;
