import './globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tharulbandara.com'),
  title: 'Tharul Bandara | Photographer | Graphics Designer | Editor',
  description: 'Tharul Bandara - Professional Photographer, Graphics Designer, and Editor. Co-Founder of Frametoque Digital Media.',
  keywords: 'Tharul Bandara, Photographer, Graphics Designer, Editor, Frametoque Digital Media, UI/UX Designer',
  icons: {
    icon: '/assets/imgs/favicon.ico',
  },
  openGraph: {
    title: 'Tharul Bandara | Photographer | Graphics Designer | Editor',
    description: 'Tharul Bandara - Professional Photographer, Graphics Designer, and Editor. Co-Founder of Frametoque Digital Media.',
    url: 'https://tharulbandara.com',
    siteName: 'Tharul Bandara Portfolio',
    images: [
      {
        url: '/assets/imgs/header/p0.png',
        width: 1200,
        height: 630,
        alt: 'Tharul Bandara',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tharul Bandara | Photographer | Graphics Designer | Editor',
    description: 'Tharul Bandara - Professional Photographer, Graphics Designer, and Editor.',
    images: ['/assets/imgs/header/p0.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="home-personal">{children}</body>
    </html>
  );
}
