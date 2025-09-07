import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit Chohan | Senior Software Engineer | Full-Stack Developer",
  description: "Senior Software Engineer specializing in React.js, Next.js, and Node.js. Building scalable web applications with modern JavaScript technologies.",
  keywords: [
    'Ankit Chohan',
    'Senior Software Engineer',
    'Full-Stack Developer',
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Web Development',
    'JavaScript',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack',
    'Software Engineer Portfolio'
  ],
  authors: [{ name: 'Ankit Chohan' }],
  creator: 'Ankit Chohan',
  publisher: 'Ankit Chohan',
  openGraph: {
    title: 'Ankit Chohan | Senior Software Engineer',
    description: 'Full-Stack Developer specializing in React.js, Next.js, and Node.js. Building scalable web applications with modern JavaScript technologies.',
    url: 'https://ankitchohan.vercel.app',
    siteName: 'Ankit Chohan',
    images: [
      {
        url: 'https://ankitchohan.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ankit Chohan - Senior Software Engineer'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Chohan | Senior Software Engineer',
    description: 'Full-Stack Developer specializing in React.js, Next.js, and Node.js',
    creator: '@AnkitChohan61',
    images: ['https://ankitchohan.vercel.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#ffffff',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
