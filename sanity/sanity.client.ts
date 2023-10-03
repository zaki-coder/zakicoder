import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-10-03",
    useCdn: false,
};

const client = createClient(config);
 
export default client;