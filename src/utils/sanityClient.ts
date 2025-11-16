import { createClient } from "@sanity/client"

export const sanityClient = createClient({
  projectId: "4krdmpbo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
})
