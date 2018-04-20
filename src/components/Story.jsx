import React, { Component } from 'react';
import styles from './styles/story.module.css';

const Story = ({ heading, image, children }) => {
  return (
    <div className={styles.container}>
    <figure className={styles.figure}>
      <img className={styles.image} src={image} alt="Brady Sutton" />
    </figure>
    <div className={styles.content}>
      <h3 className={styles.heading}> {heading} </h3>
      <div className={styles.text}>{children}</div>
    </div>
    </div>
  )
}

export default Story
