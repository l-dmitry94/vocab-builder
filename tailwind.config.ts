import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx,scss}',
        './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                primary: ['var(--font-family)'],
                secondary: ['var(--second-family)'],
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
} satisfies Config;
