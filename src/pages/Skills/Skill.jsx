import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Circle from "../../Components/Circle/Circle";

function Skill() {
  const skills = [
    // Front-End Skills
    { skill_name: "HTML", image_url: "/images/html.webp" },
    { skill_name: "CSS", image_url: "/images/css.webp" },
    { skill_name: "JavaScript", image_url: "/images/javascript.webp" },
    { skill_name: "React", image_url: "/images/react.webp" },
  
    // Back-End Skills
    { skill_name: "Node.js", image_url: "/images/node.webp" },
    { skill_name: "Express", image_url: "/images/express.webp" },
    { skill_name: "Mongodb", image_url: "/images/mongo.webp" },
  
    // Tools/Version Control
    { skill_name: "Git", image_url: "/images/github.webp" },
  
    // Programming Languages
    { skill_name: "C++", image_url: "/images/C++.webp" },
    { skill_name: "SQL", image_url: "/images/sql.webp" },
    { skill_name: "Python", image_url: "/images/python.webp" },
  ];
  

  return (
    <div>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"My Skills"} />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
          className={styles.skill_container}
        >
          {skills.map((skill, index) => (
            <SkillCard
              skill_name={skill.skill_name}
              image_url={skill.image_url}
              key={index}
            />
          ))}
        </motion.div>
      </MainContainer>
    </div>
  );
}

export default Skill;
