import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '7ic15vv6',        // your project ID from Sanity dashboard
  dataset: 'production',        // your dataset name
  apiVersion: '2026-02-22',     // today's date or latest
  useCdn: true,                 // faster public reads
})