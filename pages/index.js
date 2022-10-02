import Head from 'next/head'
import Victoria from './victoria'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Victoria Secret Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Victoria />
    </div>
  )
}
