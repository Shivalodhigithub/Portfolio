import Navbar from "../../Components/Navbar/Navbar.jsx";
import style from "./HomePage.module.css";
import HeroImage from "../../assets/newPhoto.png";
import { motion } from "framer-motion";
import {useTypewriter } from 'react-simple-typewriter'

function HomePage() {
  const [text]=useTypewriter({
    words:['MERN Stack Developer','Fronted Developer','Backend Developer'],
    loop:{},
    typeSpeed:100,
    delaySpeed:80
   })

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        exit={{ opacity: 0 }}
        className={style.hero_component}
      >
        <div className={style.left_side}>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.upper_text_style}
          >
            Hello I'm shiva
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.bottom_text_style}
          >
            
            &lt;{text}/&gt;
             
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "1",
              delay: "1.5",
            }}
            className={style.detail_text}
          >
            Passionate and detail-oriented Full Stack Developer, Proficient in
            React.js, Node.js, Express.js, Mongo db, SQL along with HTML, CSS, and JavaScript, with a strong
            foundation in responsive design and user experience principles.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: "-7vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{ delay: 2.5, stiffness: 40, duration: 0.7 }}
            className={style.download_btn}
          >
            <a
              className="link_under_button"
              target="_blank"
              href="https://drive.google.com/file/d/1GpDJC5L2LFFIBbliCUnEwc28JN81e9W6/view?usp=drive_link"
            >
            
              Download CV
            </a>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, stiffness: 40, duration: 1 }}
          className={style.right_section}
        >
          <div className={style.img_section}>
            <img src={HeroImage} alt="Shiva" className={style.hero_image} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
