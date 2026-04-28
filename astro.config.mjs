import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    integrations: [
          starlight({
                  title: 'Mail Filter Admin',
                  sidebar: [
                    { label: 'Home', link: '/' },
                    { label: 'Dashboard', link: '/dashboard' },
                    {
                                label: 'Guides',
                                autogenerate: { directory: 'guides' },
                    },
                    {
                                label: 'API Docs',
                                autogenerate: { directory: 'api' },
                    },
                          ],
                  customCss: ['./src/styles/custom.css'],
          }),
        ],
});
