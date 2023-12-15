import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "nazarioricardo",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH as string,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
