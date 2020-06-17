import Link from 'next/link';
import styles from './styles/index.module.css'

import { AppStateContext, AppProvider } from '../components/Provider';
import { useContext } from 'react';
import Layout from '../components/Layout';


export default function Home() {
  const { user } = useContext(AppStateContext)
  console.log(user)
  return (


    <div className={styles.container}>
      <h3> Home page</h3>
      <main>
        <div>
          welcome mr.{user.name}
        </div>
        <Link href='/about'> about </Link>
      </main>
    </div>


  )
}
