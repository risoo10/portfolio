import React from 'react'
import Layout from '../components/layout/layout'
import { motion } from 'framer-motion'
import { introAnimationProps } from '../constants'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import styles from './software.module.scss'
import TagList from '../components/tag-list/TagList'

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
    ) {
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

const Software = ({ children, data }) => {
  console.log('[software] queryData', data)
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  const postItemVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: '-15px',
    },
  }

  const posts = [...edges, ...edges, ...edges].map(({ node }, index) => {
      return <motion.div {...introAnimationProps} custom={(index + 1) * 0.5} key={index}
                         className={`col-12 col-md-6 ${styles.extraLargeColumn} mb-4`}>
        <motion.div className={styles.postItem}>
          <div className={styles.imageWrapper}>
            <img src=""/>
          </div>
          <motion.div className={styles.textWrapper} variants={postItemVariants} whileHover="hover">
            <Link to={node.frontmatter.path}>
              <div className={`${styles.textContent} d-flex flex-column justify-content-between`}>
                <div className="d-flex flex-column">
                  <h3 className={styles.title}>{node.frontmatter.title}</h3>
                  <p>{node.excerpt}</p>
                  <p>{node.frontmatter.date}</p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  {
                    node.frontmatter.tags && <TagList tags={node.frontmatter.tags}></TagList>
                  }
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    },
  )

  return <Layout>
    <div className="container-fluid p-2 p-md-4">
      <div className="row">
        <div className="col text-center mb-5">
          <motion.div {...introAnimationProps} className="div">
            <h1 className="mb-2">Software projects</h1>
            <p className={styles.pageSubtitle}>Here you can find some of interesting software related projects I've
              been working on lately.</p>
          </motion.div>
          <div className="row">
            {posts}
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default Software
