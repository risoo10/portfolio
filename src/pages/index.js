import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles.scss'
import styles from './index.module.scss'
import faceImg from '../../static/images/face.jpg'
import { graphql, Link } from 'gatsby'
import { motion } from 'framer-motion'
import React from 'react'
import Layout from '../components/layout/layout'
import { Carousel } from '../components/carousel/carousel'
import { introAnimationProps } from '../constants'

export const query = graphql`
  query($featuredPaths: [String] ){
    allMarkdownRemark(filter: {frontmatter: { path: { in : $featuredPaths}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            path
            title
            tags
            date(formatString: "MMMM DD. YYYY")
          }
        }
      }
    }
  }
`

export default ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const featuredPosts = edges.map(({ node }) => node)
  console.log('[index] data', featuredPosts)
  console.log('[index] context', pageContext)

  return <Layout>
    <div className="row d-flex flex-column">
      <div className={`${styles.aboutMeWrapper}`}>
        <motion.img {...introAnimationProps} className={styles.avatar} src={faceImg} alt="Autor"/>
        <motion.h1 {...introAnimationProps} custom={1}>Richard Mocák</motion.h1>
        <motion.h3 {...introAnimationProps} custom={1}
                   className={`${styles.subheader} ${styles.dynamicWidth} text-center mt-3 mb-4`}>
          I am a frontend and backend web developer with
          passion for deep learning, graphic design and photography.
        </motion.h3>
        <br/>
        <motion.h4 {...introAnimationProps} custom={1}
                   className={`${styles.subheader} ${styles.dynamicWidth} text-center mb-4`}>
          Lear more about me or contact me to discuss your idea with me.
        </motion.h4>
        <motion.div className="d-flex justify-content-center" {...introAnimationProps} custom={2}>
          <Link to="/about" className="mr-4">
            <motion.button>About me</motion.button>
          </Link>
          <Link to="/contact">
            <motion.button>Contact me</motion.button>
          </Link>
        </motion.div>
      </div>

      <hr/>

      <motion.div {...introAnimationProps} custom={3} className={`d-flex align-items-center flex-column py-4`}>
        <div className={`${styles.dynamicWidth} text-center`}>
          <h2 className="mb-3 font-weight-bold">Featured projects</h2>
          <br/>
        </div>
        <div className={`${styles.showcaseWrapper}`}>
          <Carousel slides={featuredPosts}>
          </Carousel>
        </div>
        <div className="text-center py-4 px-3">
          <h4 className={`py-3`}>Want to see more projects?</h4>
          <Link to="/software">
            <motion.button className={`outline small`}>View all</motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  </Layout>
}
