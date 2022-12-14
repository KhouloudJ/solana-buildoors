import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import WalletConextProvider from "../components/WalletContextProvider"

const colors = {
  background: "1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)"
}

const theme = extendTheme({colors})
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme= {theme}>
    <WalletConextProvider>
    <Component {...pageProps} />
    </WalletConextProvider>
  </ChakraProvider>
  )
}

export default MyApp
