import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: '싱니의 블로그',
    template: '싱니의 블로그 | %s',
  },
  description: '프론트엔드 개발자 싱니의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={notoSansKr.className}>
      <body className='flex flex-col w-full max-w-[90rem] mx-auto text-gray-900'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
