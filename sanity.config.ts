/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import { defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import StudioNavbar from './components/StudioNavbar'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { myTheme } from './theme'

export default defineConfig({
  basePath: '/studio',
  name: 'Code-Info-Studio',
  title: 'Code-Info Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio:{
    components: {
      navbar: StudioNavbar,
    }
  },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  theme: myTheme,
})
