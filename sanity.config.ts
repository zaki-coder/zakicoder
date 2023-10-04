import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-nextjs-website',
  title: 'Sanity Next.js Site',
  projectId: '0a7bog3b',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
