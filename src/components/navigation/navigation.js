import React from "react"
import styles from './navigation.module.scss'
import IconButton from "../icon-button/icon-button"
import { Link } from "gatsby";

export default () => <div className={styles.navigationWrapper}>

  <div>
    <Link to="/">LOGO</Link>
  </div>
  <nav className={styles.navigation}>
    <ul>
      <li><Link to="/about">about me</Link></li>
      <li><Link to="/software">software</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </ul>
  </nav>

  <div>
    <IconButton iconClass="fab fa-linkedin-in" />
    <IconButton iconClass="fab fa-github" />
    <IconButton iconClass="fab fa-instagram" />
  </div>
</div>
