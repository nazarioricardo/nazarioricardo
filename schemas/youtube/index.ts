import { defineField, defineType } from "sanity";
import YouTubePreview from "./YouTubePreview";

export default defineType({
  name: "youtube",
  type: "object",
  title: "YouTube",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "YouTube Video URL",
      components: {
        preview: YouTubePreview,
      },
    }),
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
