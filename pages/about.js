import React, { useEffect, useState, useContext } from 'react';
import styles from './styles/about.module.css'
import Link from 'next/link';
import Api from '../service/api';
import Layout from '../components/Layout';
import { AppProvider } from '../components/Provider';

const url = 'https://jsonplaceholder.typicode.com/todos' //sample api to get some JSON response


const About = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        Api.get(url)
            .then(res => setData(res.slice(0, 20)))
            .catch(err => console.log(err))
    }, [])

    return (

        <div className={styles.container}>
            <h3> About page</h3>
            <p>check out some dummy data--</p>
            <ul>
                {data ? data.map(d => <li key={d.id}>{d.title}</li>) : <p>Loading...</p>}
            </ul>
            <Link href='/index'>go back</Link>
        </div>

    );
}

export default About;
