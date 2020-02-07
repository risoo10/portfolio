import React from 'react'
import Layout from '../components/layout/layout'
import { motion } from 'framer-motion'
import { introAnimationProps } from '../constants'

export default function Software({ children }) {
  return <Layout>
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <motion.h1 {...introAnimationProps} >Software development</motion.h1>
        </div>
      </div>
    </div>
  </Layout>
};