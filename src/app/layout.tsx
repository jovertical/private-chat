import { Open_Sans } from 'next/font/google';

import '@/app/globals.css';
import { cx } from '@/utils';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Private Chat 🔒',
  description: 'Privacy first chat app with end-to-end encryption.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={cx([openSans.className, 'h-full'])}>{children}</body>
    </html>
  );
}
