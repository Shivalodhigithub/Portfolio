import React from "react";
import styles from "./SkillCard.module.css";

function SkillCard({ skill_name, image_url }) {
  return (
    <div className={styles.skill_card}>
      <img src={image_url} alt={skill_name} className={styles.skill_image} />
      <p className={styles.skill_name}>{skill_name}</p>
    </div>
  );
}

export default SkillCard;
