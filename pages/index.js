import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <meta name="description" content="Frontend Developer, React Developer, My-Portfolio" /> */}
        {/* <meta name="keywords" content="HTML5,CSS,JAVASCRIPT,REACT,REDUX,SASS,BOOTSTRAP,FRONTEND DEVELOPER,FRONTEND,WEB,DEVELOPER"></meta> */}
<meta name="google-site-verification" content="bFnjxYzJlaAu1XgBaK7jwviK5Bm3FiCzgyaXxAd5X10" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <iframe className={styles.iframe} frameBorder='0' src="https://asomiddin.netlify.app/">
      </iframe>

    </div>
  )
}
