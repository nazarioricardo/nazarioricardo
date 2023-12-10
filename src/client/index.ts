import { createClient } from "next-sanity";

const date = new Date();

export default createClient({
  projectId: "8e3toju4",
  dataset: "production",
  apiVersion: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, // Usually you’d want to put in today’s date YYYY-MM-DD to get the newest version of the query API.
  useCdn: false,
});
