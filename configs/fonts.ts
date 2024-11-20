import localFont from 'next/font/local';

export const primaryFont = localFont({
    src: [
        {
            path: '../public/fonts/MacPawFixelDisplay-Regular.otf',
            weight: '400',
        },
        {
            path: '../public/fonts/MacPawFixelDisplay-Medium.otf',
            weight: '500',
        },
        {
            path: '../public/fonts/MacPawFixelDisplay-SemiBold.otf',
            weight: '600',
        },
        {
            path: '../public/fonts/MacPawFixelDisplay-Bold.otf',
            weight: '700',
        },
    ],
    variable: '--font-family',
});

export const secondaryFont = localFont({
    src: [
        {
            path: '../public/fonts/SF-Pro-Display-Light.otf',
            weight: '300',
        },
        {
            path: '../public/fonts/SF-Pro-Display-Regular.otf',
            weight: '400',
        },
    ],
    variable: '--second-family',
});
