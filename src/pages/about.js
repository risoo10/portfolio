import React from 'react'
import Layout from '../components/layout/layout'
import { introAnimationProps } from '../constants'
import { motion } from 'framer-motion'
import styles from './about.module.scss'

export default function About({ children }) {
  return <Layout>
    <div className="py-4">
      <div className="row">
        <div className="col text-center">
          <motion.h1 {...introAnimationProps}>About me</motion.h1>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <motion.div className="row py-4 px-3" {...introAnimationProps} custom={1}>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
              <img src="/images/aboutme-portrait.jpg" alt="Portrait photo"
                   className={styles.portraitImage}/>
            </div>
            <div className="col-12 col-md-8 py-5">
              <h3>Hi. I am Richard.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ipsum dolor sit amet,
                consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="row">
        <motion.div {...introAnimationProps} custom={2} className={`col-12 py-5 ${styles.extraLightBg}`}>
          <div className="py-4 text-center">
            <h3>My tech skills</h3>
          </div>
          <div className="container">
            <div className="row">
              {/* FRONTEND */}
              <div className={`col-12 col-md-4 ${styles.skillItem} ${styles.frontend}`}>
                <div className={styles.skillHeaderContent}>
                  <div className={`${styles.skillIcon}`}/>
                  <h5 className="font-weight-bold">Frontend</h5>
                </div>
                <hr/>
                <div className={styles.skillContentWrapper}>
                  <div className="mb-4">
                    <h6 className={styles.title}>Languages:</h6>
                    <ul>
                      <li>Javascript</li>
                      <li>Typescript</li>
                      <li>HTML</li>
                      <li>CSS (SASS, less)</li>
                      <li>JSX</li>
                    </ul>
                  </div>
                  <h6 className={styles.title}>Technologies:</h6>
                  <ul>
                    <li>Angular</li>
                    <li>React</li>
                    <li>Gatsby</li>
                  </ul>
                </div>
              </div>
              {/* BACKEND */}
              <div className={`col-12 col-md-4 ${styles.skillItem} ${styles.backend}`}>
                <div className={styles.skillHeaderContent}>
                  <div className={`${styles.skillIcon}`}/>
                  <h5 className="font-weight-bold">Backend</h5>
                </div>
                <hr/>
                <div className={styles.skillContentWrapper}>
                  <div className="mb-4">
                    <h6 className={styles.title}>Languages:</h6>
                    <ul>
                      <li>Java</li>
                      <li>Python</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                  <h6 className={styles.title}>Technologies:</h6>
                  <ul>
                    <li>Docker</li>
                    <li>Springboot</li>
                    <li>Flask</li>
                    <li>Express</li>
                  </ul>
                </div>
              </div>
              {/* DEEP LEARNING */}
              <div className={`col-12 col-md-4 ${styles.skillItem} ${styles.deepLearning}`}>
                <div className={styles.skillHeaderContent}>
                  <div className={`${styles.skillIcon}`}/>
                  <h5 className="font-weight-bold">Deep learning</h5>
                </div>
                <hr/>
                <div className={styles.skillContentWrapper}>
                  <div className="mb-4">
                    <h6 className={styles.title}>Languages:</h6>
                    <ul>
                      <li>Python</li>
                    </ul>
                  </div>
                  <h6 className={styles.title}>Technologies:</h6>
                  <ul>
                    <li>PyTorch</li>
                    <li>Keras</li>
                    <li>Tensorflow</li>
                    <li>Pandas</li>
                    <li>Jupyter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="separator"></div>

      <div className="row">
        <div className="container">
          <div className="row px-3">
            <div className="col-12">
              <h3>Studies</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ipsum dolor sit amet,
                consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.</p>
            </div>
          </div>
          <div className="separator"></div>
          <div className="row px-3">
            <div className="col-12">
              <h3>Graphic design and photography</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ipsum dolor sit amet,
                consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.</p>
            </div>
          </div>
          <div className="separator"></div>
        </div>
      </div>
    </div>
  </Layout>
};