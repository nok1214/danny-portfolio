import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Longfei-Li',
  description: "Longfei's personal portfolio",
  openGraph: {
    title: 'longfei-dev.com',
    description: "Longfei's personal portfolio",
    url: 'https://longfei-dev.com/',
    siteName: 'longfei-dev.com',
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
