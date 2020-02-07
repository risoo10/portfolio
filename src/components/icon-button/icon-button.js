import React from 'react'
import styles from './icon-button.module.scss'

export default function IconButton(props) {
  return <a className={styles.iconBtn} href={props.url || undefined} target={props.target || '_blank'}><i
    className={`${props.iconClass} fa-lg`}/></a>
}