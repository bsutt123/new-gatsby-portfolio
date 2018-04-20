import React from "react";
import Link from "gatsby-link";

//import styles
import styles from "./styles/skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Developed Skills</div>
      <div className={styles.skillsList}>
        <Link to="/skills/javascript">
          <img src="/img/javascript.svg" className={styles.skillImg} />
        </Link>
        <Link to="/skills/javascript">
          <img src="/img/javascript.svg" className={styles.skillImg} />
        </Link>
        <Link to="/skills/javascript">
          <img src="/img/javascript.svg" className={styles.skillImg} />
        </Link>
        <Link to="/skills/javascript">
          <img src="/img/javascript.svg" className={styles.skillImg} />
        </Link>
        <Link to="/skills/javascript">
          <img src="/img/javascript.svg" className={styles.skillImg} />
        </Link>
        <Link to="/skills/javascript">
          <img src="/img/javascript.svg" className={styles.skillImg} />
        </Link>
        <Link to="/skills/javascript">
          <img src="/img/javascript.svg" className={styles.skillImg} />
        </Link>
      </div>
    </div>
  );
};

export default Skills;
