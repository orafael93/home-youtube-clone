import styled from "styled-components";

export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ThumbVideo = styled.div`
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DescriptioVideoAndImageChannel = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ImageChannel = styled.div`
  & img {
    border-radius: 50%;
  }
`;

export const ContentVideo = styled.div`
  padding: 5px 0;
`;

export const TitleVideo = styled.h2`
  font-size: 1em;
  line-height: 1.4;
  font-weight: 500;
  text-transform: uppercase;
`;

export const NameChannel = styled.h3`
  font-size: 0.9em;
  font-weight: 100;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.7);
  margin: 8px 0 5px 0;
`;

export const ViewsCountAndDateVideo = styled.p`
  font-size: 0.9em;
  font-weight: 100;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.7);
`;
