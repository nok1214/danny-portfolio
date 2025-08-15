import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'zhuoran-Li',
  description: "zhuoran's personal portfolio",
  openGraph: {
    title: 'zhuoran-dev.com',
    description: "zhuoran's personal portfolio",
    url: 'https://zhuoran-dev.com/',
    siteName: 'zhuoran-dev.com',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
