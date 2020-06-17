import { AppProvider } from "../components/Provider";
import Layout from "../components/Layout";



export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}
