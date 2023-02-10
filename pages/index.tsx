import Head from "next/head"

import type { ReactElement } from "react"

export default function Home(): ReactElement {
   return (
      <>
         <Head>
            <title>Treview</title>
            <meta content="Food review website by Samuel Trew" name="description" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link href="/favicon.ico" rel="icon" />
         </Head>
         <main>Hello</main>
      </>
   )
}
