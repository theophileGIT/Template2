import localFont from 'next/font/local';

const fonts = localFont({
  src: [
    /* Switzer */
    {
      path: '../public/fonts/switzer/Switzer-Regular.woff2',
      weight: "400",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--Switzer-Regular'
    },
    {
      path: '../public/fonts/switzer/Switzer-Medium.woff2',
      weight: "500",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--Switzer-Medium'
    },
    {
      path: '../public/fonts/switzer/Switzer-Semibold.woff2',
      weight: "600",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--Switzer-Semibold'
    },
    {
      path: '../public/fonts/switzer/Switzer-Bold.woff2',
      weight: "700",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--Switzer-Bold'
    }
  ]
});

export default fonts;