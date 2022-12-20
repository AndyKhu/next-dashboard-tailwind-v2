import '@styles/globals.css'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@redux/store'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  </Provider>
)

export default App
