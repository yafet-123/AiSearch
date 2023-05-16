export const metadata = {
  title: 'Yafet Media',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
}

import '../styles/globals.css'
import Header from './components/Header';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
