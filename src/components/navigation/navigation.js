import React from 'react'
import styles from './navigation.module.scss'
import IconButton from '../icon-button/icon-button'
import { Link } from 'gatsby'
import logoImg from '../../../static/logo.svg'

export default () => <div className={styles.navigationWrapper}>

  <div>
    <Link to="/"><img className={styles.logoImg} src={logoImg} alt="logo"/></Link>
  </div>
  <nav className={styles.navigation}>
    <ul>
      <li><Link to="/about">about me</Link></li>
      <li><Link to="/software">software</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </ul>
  </nav>

  <div>
    <IconButton iconClass="fab fa-linkedin-in" url="https://www.linkedin.com/in/richard-mocak"/>
    <IconButton iconClass="fab fa-github" url="https://github.com/risoo10"/>
    <IconButton iconClass="fab fa-instagram" url="https://www.instagram.com/riki_man_10/"/>
  </div>
</div>
