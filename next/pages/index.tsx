import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Webマガジン　小説の木</title>
        <meta name="description" content="準備中" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <img src="/logo.png" alt="" />
          <span>小説の木</span>
        </h1>
        <p>準備中</p>
        
      </main>
    </div>
  )
}

export default Home
