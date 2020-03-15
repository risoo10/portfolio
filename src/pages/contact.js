import React from 'react'
import Layout from '../components/layout/layout'
import { introAnimationProps } from '../constants'
import { motion } from 'framer-motion'

export default function Contact({ children }) {
  return <Layout>
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col text-center">
          <motion.h1 {...introAnimationProps} >Contact</motion.h1>
        </div>
      </div>
    </div>
  </Layout>
};