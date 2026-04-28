import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Mail Filter Admin',
      sitemap: false,
      sidebar: [
        { label: '首頁', link: '/' },
        { label: '控制台', link: '/dashboard' },
      ],
    }),
  ],
});
