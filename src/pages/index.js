import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles.scss'
import styles from './index.module.scss'
import faceImg from '../../static/face.jpg'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import React from 'react'
import Layout from '../components/layout/layout'
import { Carousel } from '../components/carousel/carousel'
import { introAnimationProps } from '../constants'

export default () => <Layout>
  <div className="row d-flex flex-column overflow-auto">
    <div className={`${styles.aboutMeWrapper}`}>
      <motion.img {...introAnimationProps} className={styles.avatar} src={faceImg} alt="Autor"/>
      <motion.h1 {...introAnimationProps} custom={1}>Richard Mocák</motion.h1>
      <motion.h3 {...introAnimationProps} custom={1} className={`${styles.subheader} text-center mb-4`}>I am a <Link
        to="/software">software developer</Link> with
        passion for photography and graphics.
      </motion.h3>
      <Link to="/contact">
        <motion.button to="/contact" {...introAnimationProps} custom={2}>Contact me</motion.button>
      </Link>
    </div>
    <div className={`${styles.showcaseWrapper}`}>
      <Carousel slides={[1, 2, 3]}>
      </Carousel>
    </div>
  </div>
</Layout>
