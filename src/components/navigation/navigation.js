import React, { useState } from 'react'
import styles from './navigation.module.scss'
import IconButton from '../icon-button/icon-button'
import { Link } from 'gatsby'
import logoImg from '../../../static/logo.svg'
import { motion } from 'framer-motion'
import { complexAnimationDuration, fastAnimationDuration } from '../../constants'


const navigationLinks = () => <nav className={styles.navigation}>
  <ul>
    <li><Link to="/about">about me</Link></li>
    <li><Link to="/software">software</Link></li>
    <li><Link to="/contact">contact</Link></li>
  </ul>
</nav>

export default function Navigation() {

  const [menuOpened, setMenuOpened] = useState(false)

  const overlayMenuAnimations = {
    hidden: {
      scale: 0,
      x: '100%',
      y: '-100%',
      borderBottomLeftRadius: '900px',
    },
    visible: {
      scale: 1,
      x: 0,
      y: 0,
      borderBottomLeftRadius: 0,
    },
  }

  return <React.Fragment>
    <div className={styles.navigationWrapper}>
      <div>
        <Link to="/"><img className={styles.logoImg} src={logoImg} alt="logo"/></Link>
      </div>

      {navigationLinks()}

      <div className={styles.iconWrapper}>
        <IconButton iconClass="fab fa-linkedin-in" url="https://www.linkedin.com/in/richard-mocak"/>
        <IconButton iconClass="fab fa-github" url="https://github.com/risoo10"/>
        <IconButton iconClass="fab fa-instagram" url="https://www.instagram.com/riki_man_10/"/>
      </div>

      <div className={styles.hamburgerMenuWrapper}>
        {!menuOpened ?
          <i onClick={() => setMenuOpened(true)} className="fas fa-bars fa-2x"></i> :
          <i onClick={() => setMenuOpened(false)} className="fas fa-times fa-2x"></i>
        }
      </div>
    </div>
    {menuOpened && <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        duration: fastAnimationDuration,
      }}
      variants={overlayMenuAnimations}
      className={styles.overlayMenu}>
      {navigationLinks()}
    </motion.div>}
  </React.Fragment>
}
