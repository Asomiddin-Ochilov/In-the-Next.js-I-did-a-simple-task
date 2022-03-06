import '../styles/globals.css'
import { NextSeo } from 'next-seo';
function MyApp({ Component, pageProps }) {
  return (

    <>
      <NextSeo
        title='Asomiddin Ochilov Frontend Developer'
        description='Frontend Developer, React Developer, My-Portfolio'
        keywords='HTML5,CSS,JAVASCRIPT,REACT,REDUX,SASS,BOOTSTRAP,FRONTEND DEVELOPER,FRONTEND,WEB,DEVELOPER'
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
