import React from 'react';
import styles from './landing.module.scss';

export default () => <div className="row">
  <div className={`col-7 ${styles.aboutMeWrapper}`}>
    <img src="" alt=""/>
    <h1>Richard Mocák</h1>
    <h3>I am a software developer with passion for photography and graphics.</h3>
    <button>Contact me</button>
  </div>
  <div className={`col-5 ${styles.showcaseWrapper}`}></div>
</div>