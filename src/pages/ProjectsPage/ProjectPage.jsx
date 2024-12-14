import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import cropIMG from "../../assets/crop_recomm.png";
import marketingIMG from "../../assets/marketingIMG.png";
import travelHookIMG from "../../assets/travelhookIMG.png";
import safecamIMG from "../../assets/safecamIMG.png";
import employee from "../../assets/employee.png";
import ml from "../../assets/ml.svg";
import ai from "../../assets/ai.svg";
import python from "../../assets/python.svg";
import weatherAppImg from '../../assets/weaht.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://shiva-emp-system.vercel.app/"}
              githubLink={"https://github.com/Shivalodhigithub/employee-management-system"}
              projectName={"Employee Management System"}
              projectDetails={
                "An efficient and user-friendly platform for managing employee data, built with the MERN stack."
              }
              demoImage={employee}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", // Node.js logo
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", // MongoDB logo
              ]}

            />
                  <ProjectCard
              previewLink={"https://shiva-crop-management-system.onrender.com"}
              githubLink={"https://github.com/Shivalodhigithub/Render"}
              projectName={"Crop Recommendation System"}
              projectDetails={
                "It is a Crop Recommendation System that analyzes soil parameters, weather conditions, and crop requirements to suggest the best crops for optimal yield."
              }
              demoImage={cropIMG}
              key={"Crop Recommendation System"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                python,
                ml,
                ai,
              ]}

            />
            <ProjectCard
              previewLink={"https://reatweathersite.netlify.app/"}
              githubLink={"https://github.com/shivam1611/react-whether-app/tree/main"}
              projectName={"React Weather App"}
              projectDetails={
                "This is React Weather App for you to see how the day is going. Interactive Web Application based on API Data fetching."
              }
              demoImage={weatherAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
              ]}
            />

       
             
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
