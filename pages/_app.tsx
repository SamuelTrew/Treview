import { CacheProvider, EmotionCache } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { AppProps } from "next/app"
import Head from "next/head"
import * as React from "react"

import createEmotionCache from "../config/createEmotionCache"
import theme from "../config/theme"
import Header from "@/common/components/Header"

import type { ReactElement } from "react"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
   emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps): ReactElement {
   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
   return (
      <CacheProvider value={emotionCache}>
         <Head>
            <meta content="initial-scale=1, width=device-width" name="viewport" />
         </Head>
         <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
         </ThemeProvider>
      </CacheProvider>
   )
}
