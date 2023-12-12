import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";
import YouTubePlayer from "react-player/youtube";

type PreviewYouTubeProps = {
  url: string;
} & PreviewProps;

function YouTubePreview({ url }: PreviewYouTubeProps) {
  return (
    <Flex padding={4} justify={"center"} direction={"column"} gap={4}>
      <Text>Add a YouTube URL</Text>
      {url && <YouTubePlayer width={"100%"} url={url} />}
    </Flex>
  );
}

export default YouTubePreview;
