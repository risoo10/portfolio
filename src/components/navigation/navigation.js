import React from "react"
import styles from './navigation.module.scss'
import IconButton from "../icon-button/icon-button"

export default () => <div className={styles.navigationWrapper}>
  <div>
    <a href="#">LOGO</a>
  </div>
  <nav className={styles.navigation}>
    <ul>
      <li><a href="#">about me</a></li>
      <li><a href="#">software</a></li>
      <li><a href="#">contact</a></li>
    </ul>
  </nav>

  <div>
    <IconButton iconClass="fab fa-linkedin-in" />
    <IconButton iconClass="fab fa-instagram" />
  </div>
</div>
