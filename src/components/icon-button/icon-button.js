import React from "react"
import styles from './icon-button.module.scss'

export default function IconButton(props) {
  return <button className={styles.iconBtn}><i className={`${props.iconClass} fa-lg`}/></button>
}