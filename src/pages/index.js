import "../../node_modules/bootstrap/dist/css/bootstrap-reboot.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles.scss"
import styles from "./index.module.scss"
import faceImg from "../../static/face.jpg";
import { Link } from "gatsby"

import React from "react"
import Layout from "../components/layout/layout"

export default () => <Layout>
  <div className="row d-flex flex-column h-100">
    <div className={`${styles.flexRow} ${styles.aboutMeWrapper}`}>
      <img className={styles.avatar} src={faceImg} alt="Autor"/>
      <h1>Richard Mocák</h1>
      <h3 className={`${styles.subheader} text-center mb-4`}>I am a <Link to="/software">software developer</Link> with passion for photography and graphics.</h3>
      <button>Contact me</button>
    </div>
    <div className={`${styles.flexRow} ${styles.showcaseWrapper}`}>
      <p>Sem ide showcase</p>
    </div>
  </div>
</Layout>
