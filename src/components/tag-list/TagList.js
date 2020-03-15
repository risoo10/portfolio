import styles from './TagList.module.scss'
import React from 'react'

export default function TagList({tags}) {
  return <ul className={styles.tagList}>
    {
      tags.map((tag, index) => <li className={styles.tagItem} key={`${index}-${tag}`}>
        <small>{tag}</small>
      </li>)
    }
  </ul>
}