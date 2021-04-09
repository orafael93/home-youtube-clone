import React from "react";
import {
  AsideContainer,
  WrapperList,
  ListItem,
  ListLink,
  TitleLink,
} from "./styled";
import { Home } from "@styled-icons/material/Home";
import { LocalFireDepartment as TrendingLogo } from "@styled-icons/material/LocalFireDepartment";
import { Subscriptions } from "@styled-icons/material-sharp/Subscriptions";
import { VideoLibrary } from "@styled-icons/material/VideoLibrary";
import { History } from "@styled-icons/material/History";
import { Music } from "@styled-icons/evaicons-solid/Music";
import { Baseball } from "@styled-icons/ionicons-solid/Baseball";
import { Youtubegaming } from "@styled-icons/simple-icons/Youtubegaming";
import { LocalMovies } from "@styled-icons/material/LocalMovies";
import { News } from "@styled-icons/boxicons-regular/News";
import { Radio } from "@styled-icons/ionicons-outline/Radio";
import { Settings } from "@styled-icons/ionicons-sharp/Settings";
import { FlagAlt as Flag } from "@styled-icons/boxicons-solid/FlagAlt";
import { HelpCircle } from "@styled-icons/boxicons-solid/HelpCircle";
import { Feedback } from "@styled-icons/material/Feedback";

const Aside = ({ menuActive }) => {
  return (
    <AsideContainer menuactive={menuActive ? 1 : 0}>
      <WrapperList>
        <ListItem menuactive={menuActive ? 1 : 0}>
          <ListLink
            to="/"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Home size="22" />
            <TitleLink>Home</TitleLink>
          </ListLink>
        </ListItem>
        <ListItem menuactive={menuActive ? 1 : 0}>
          <ListLink
            to="/feed/trending"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.1)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <TrendingLogo size="22" />
            <TitleLink>Trending</TitleLink>
          </ListLink>
        </ListItem>
        <ListItem menuactive={menuActive ? 1 : 0}>
          <ListLink
            to="/feed/subscriptions"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.1)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Subscriptions size="22" />
            <TitleLink>Subscriptions</TitleLink>
          </ListLink>
        </ListItem>
      </WrapperList>
      <WrapperList>
        <ListItem menuactive={menuActive ? 1 : 0}>
          <ListLink
            to="/feed/library"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <VideoLibrary size="22" />
            <TitleLink>Library</TitleLink>
          </ListLink>
        </ListItem>
        <ListItem menuactive={menuActive ? 1 : 0}>
          <ListLink
            to="/feed/history"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <History size="22" />
            <TitleLink>History</TitleLink>
          </ListLink>
        </ListItem>
      </WrapperList>

      <WrapperList className="hide-small" menuactive={menuActive ? 1 : 0}>
        <h4>Best of YouTube</h4>
        <ListItem>
          <ListLink
            to="/channel/music"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Music size="22" />
            <TitleLink>Music</TitleLink>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink
            to="/channel/sports"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Baseball size="22" />
            <TitleLink>Sports</TitleLink>
          </ListLink>
          <ListLink
            to="/channel/gaming"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Youtubegaming size="22" />
            <TitleLink>Gaming</TitleLink>
          </ListLink>
          <ListLink
            to="/channel/movies"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <LocalMovies size="22" />
            <TitleLink>Movies</TitleLink>
          </ListLink>
          <ListLink
            to="/channel/news"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <News size="22" />
            <TitleLink>News</TitleLink>
          </ListLink>
          <ListLink
            to="/channel/live"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Radio size="22" />
            <TitleLink>Live</TitleLink>
          </ListLink>
        </ListItem>
      </WrapperList>

      <WrapperList className="hide-small" menuactive={menuActive ? 1 : 0}>
        <ListItem>
          <ListLink
            to="/account"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Settings size="22" />
            <TitleLink>Settings</TitleLink>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink
            to="/reporthistory"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Flag size="22" />
            <TitleLink>Report history</TitleLink>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink
            to="/help"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <HelpCircle size="22" />
            <TitleLink>Help</TitleLink>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink
            to="/feedback"
            end
            activeStyle={{ background: "rgba(255, 255, 255, 0.10)" }}
            menuactive={menuActive ? 1 : 0}
          >
            <Feedback size="22" />
            <TitleLink>Send feedback</TitleLink>
          </ListLink>
        </ListItem>
      </WrapperList>

      <p className="hide-small" menuactive={menuActive ? 1 : 0}>
        &copy; 2020 Google LLC
      </p>
    </AsideContainer>
  );
};

export default Aside;
