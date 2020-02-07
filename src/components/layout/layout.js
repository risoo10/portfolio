import React from 'react'
// import styles from "./layout.module.scss"
import Navigation from '../navigation/navigation'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return <React.Fragment>
    <div className="container-fluid" style={{ height: '100vh' }}>
      <div className="row" style={{ height: '100%' }}>
        <div className={`col ${styles.navigationWrapper}`}>
          <Navigation></Navigation>
        </div>
        <div className="col">
          {children}
        </div>
      </div>
    </div>
  </React.Fragment>
};