import '../public/scss/style.scss'
import Layout from '../componenets/layout.jsx'

function MyApp({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp
