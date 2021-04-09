import React from "react";
import YouTubeLogo from "../../images/yt_logo_rgb_dark.png";
import { VideoPlus } from "@styled-icons/boxicons-solid/VideoPlus";
import { GridThreeUp } from "@styled-icons/open-iconic/GridThreeUp";
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular/DotsVerticalRounded";

// STYLES
import {
  Header as HeaderContent,
  Nav,
  Button,
  MenuHamburguer,
  LogoAndHamburguer,
  SearchInput,
  MultipleIcons,
  LogoImage,
  Search,
  WrapperIcon,
  WrapperLogin,
  UserLoginImage,
} from "./styled";

const Header = ({ setMenuActive }) => {
  return (
    <HeaderContent>
      <Nav>
        <LogoAndHamburguer>
          <Button>
            <MenuHamburguer
              size="30"
              onClick={() => setMenuActive((value) => (value = !value))}
            />
          </Button>
          <LogoImage to="/">
            <img src={YouTubeLogo} alt="" width="80" />
          </LogoImage>
        </LogoAndHamburguer>
        <SearchInput>
          <input type="text" placeholder="Search" />
          <Button>
            <Search size="18" />
          </Button>
        </SearchInput>
        <MultipleIcons>
          <div>
            <WrapperIcon>
              <VideoPlus size="22" />
            </WrapperIcon>
            <WrapperIcon>
              <GridThreeUp size="16" />
            </WrapperIcon>
            <WrapperIcon>
              <DotsVerticalRounded size="24" />
            </WrapperIcon>
            <WrapperLogin>
              <UserLoginImage size="28" />
              <span>sign in</span>
            </WrapperLogin>
          </div>
        </MultipleIcons>
      </Nav>
    </HeaderContent>
  );
};

export default Header;
