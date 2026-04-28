import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '🛡️ Mail Filter Admin',
      sidebar: [
        { label: '首頁', link: '/' },
        { label: '控制台', link: '/dashboard' },
        { label: '使用手冊', autogenerate: { directory: 'guides' } },
        { label: 'API 文檔', autogenerate: { directory: 'api' } },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
