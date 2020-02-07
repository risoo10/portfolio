import React from 'react'
import Layout from '../components/layout/layout'

export default function About({ children }) {
  return <Layout>
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <h1>About me</h1>
        </div>
      </div>
    </div>
  </Layout>
};