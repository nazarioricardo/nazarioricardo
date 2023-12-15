import { createClient, type ClientConfig } from "@sanity/client";

const date = new Date();

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  apiVersion: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, // Usually you’d want to put in today’s date YYYY-MM-DD to get the newest version of the query API.
  useCdn: false,
};

const client = createClient(config);

export default client;
