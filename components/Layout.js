import React, { useState, useContext } from 'react';
import { AppProvider, AppStateContext, useDetails, useDispatchDetails, } from './Provider';
import styles from './styles/layout.module.css'


const Layout = ({ children }) => {
    const { mode, user } = useContext(AppStateContext)
    const dispatch = useDispatchDetails()
    const setMode = () => dispatch({ type: 'SET_MODE', payload: mode === 'dark' ? 'light' : 'dark' })
    console.log(mode)
    return (
        // wrapping child components with the provider
        <div className={mode === 'light' ? [styles.container, styles.xyz].join(' ') : styles.container}> {/*keeping the constant designs allover the page eg. the header */}
            <h3>Welcome to Tsaro !</h3>
            <h5 onClick={() => setMode()}>enable {mode} mode {mode === 'light' ? '🌤' : '🌙'}  </h5>
            <p>(*just an example of global state usability)</p>
            <br/>
            {children}
        </div>
    );
}

export default Layout;