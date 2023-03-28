import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/common/Navbar';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider enableSystem={true} attribute="class">
      <div>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
