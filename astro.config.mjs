import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import swup from '@swup/astro'
import Compress from 'astro-compress'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeComponents from 'rehype-components' /* Render the custom directive content */
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive' /* Handle directives */
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives'
import remarkMath from 'remark-math'
import remarkSectionize from 'remark-sectionize'
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.mjs'
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.mjs'
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.js'
import { remarkExcerpt } from './src/plugins/remark-excerpt.js'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://jatanrathod.com',
  base: '/',
  output: 'server',
  adapter: vercel(),
  devToolbar: {
    enabled: false, // This disables the dev toolbar
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    svelte(),
    react(),
    icon({
      include: {
        ph: ['*'],
        'simple-icons': ['*'],
      },
    }),
    // Disable Compress integration temporarily
    // Compress({
    //   css: true,
    //   html: {
    //     removeAttributeQuotes: false,
    //   },
    //   img: {
    //     quality: 80,
    //   },
    //   js: true,
    //   svg: {
    //     multipass: true,
    //   },
    // }),
  ],
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      remarkExcerpt,
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      remarkSectionize,
      parseDirectiveNode,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent,
            note: (x, y) => AdmonitionComponent(x, y, 'note'),
            tip: (x, y) => AdmonitionComponent(x, y, 'tip'),
            important: (x, y) => AdmonitionComponent(x, y, 'important'),
            caution: (x, y) => AdmonitionComponent(x, y, 'caution'),
            warning: (x, y) => AdmonitionComponent(x, y, 'warning'),
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro', 'astro-icon'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['astro-icon'],
    },
    envPrefix: ['PUBLIC_', 'OPENAI_'],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
})
