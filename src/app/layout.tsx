import type { Metadata } from 'next';
import { IsClientCtxProvider } from '@/context/IsClientContext';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Makers Engineering',
  description:
    "Discover a dynamic force in the engineering realm, MAKERS Engineering Limited, based in Juba, South Sudan. With a track record spanning multiple technical domains, we've been redefining possibilities in the Civil Engineering Industry since our inception in 2018.",
  icons: {
    icon: '/imgs/logo/favicon.ico',
    shortcut: '/imgs/logo/favicon-32x32.png',
    apple: '/imgs/logo/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/imgs/logo/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <IsClientCtxProvider>
          <Navbar />
          <main className='min-h-screen overflow-x-hidden'>{children}</main>
          <Footer />
        </IsClientCtxProvider>
      </body>
    </html>
  );
}
