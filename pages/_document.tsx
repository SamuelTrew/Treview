import createEmotionServer from "@emotion/server/create-instance"
import Document, {
   Html,
   Head,
   Main,
   NextScript,
   type DocumentInitialProps,
   DocumentContext,
} from "next/document"

import createEmotionCache from "@/config/createEmotionCache"

import type { ReactElement } from "react"

interface DocumentProps extends DocumentInitialProps {
   emotionStyleTags: ReactElement[]
}

export default class MyDocument extends Document<DocumentProps> {
   override render(): ReactElement {
      return (
         <Html lang="en">
            <Head>{this.props.emotionStyleTags}</Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentProps> => {
   const originalRenderPage = ctx.renderPage

   const cache = createEmotionCache()
   const { extractCriticalToChunks } = createEmotionServer(cache)

   ctx.renderPage = () =>
      originalRenderPage({
         enhanceApp: (App) =>
            function EnhanceApp(props) {
               return <App emotionCache={cache} {...props} />
            },
      })

   const initialProps = await Document.getInitialProps(ctx)

   const emotionStyles = extractCriticalToChunks(initialProps.html)
   const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
         // eslint-disable-next-line react/no-danger
         dangerouslySetInnerHTML={{ __html: style.css }}
         data-emotion={`${style.key} ${style.ids.join(" ")}`}
         key={style.key}
      />
   ))

   return {
      ...initialProps,
      emotionStyleTags,
   }
}
