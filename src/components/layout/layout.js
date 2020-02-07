import React from 'react'
// import styles from "./layout.module.scss"
import Navigation from '../navigation/navigation'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return <React.Fragment>
    <div className={styles.navigationWrapper}>
      <Navigation></Navigation>
    </div>
    <div className={styles.contentWrapper}>
      <div className="container-fluid">
        {children}
      </div>
    </div>
  </React.Fragment>
};