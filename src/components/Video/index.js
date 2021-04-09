import React from "react";
import {
  VideoContent,
  ThumbVideo,
  DescriptioVideoAndImageChannel,
  ImageChannel,
  ContentVideo,
  TitleVideo,
  NameChannel,
  ViewsCountAndDateVideo,
} from "./styled";
import imageVideo from "../../images/image-video.jpg";
import imageChannel from "../../images/image-channel.jpg";

const Video = () => {
  return (
    <VideoContent>
      <ThumbVideo>
        <img src={imageVideo} alt="" />
      </ThumbVideo>
      <DescriptioVideoAndImageChannel>
        <ImageChannel>
          <img src={imageChannel} alt="" />
        </ImageChannel>
        <ContentVideo>
          <TitleVideo>Título do vídeo</TitleVideo>
          <NameChannel>Nome do canal</NameChannel>
          <ViewsCountAndDateVideo>
            32K views • 2 months ago
          </ViewsCountAndDateVideo>
        </ContentVideo>
      </DescriptioVideoAndImageChannel>
    </VideoContent>
  );
};

export default Video;
