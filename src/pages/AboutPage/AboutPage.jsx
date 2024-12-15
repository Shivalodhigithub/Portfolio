import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2018 - 2019"}
                  timeline_title={"High School "}
                  location={"Govt. High School Katha, Bhind (M.P)"}
                  details={
                    "Completed my High School from State Board with 91.4%."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2020 - 2021"}
                  timeline_title={"Higher Secondary (10+2)"}
                  location={"Govt. Higher Secondary School Mihona, Bhind (M.P)"}
                  details={
                    "Completed my Higher Secondary from State Board with 91.6%."
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2025"}
                  timeline_title={"B.TECH in Computer Science "}
                  location={"Madhav Institute of Technology & Science Gwalior (M.P)"}
                  details={"Pursueing B.TECH in Computer Science & Engineering with 8.09 cgpa at Madhav Institute of Technology & Science Gwalior"}
                  img={
                    "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  }
                />
              </div>
               
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2022 - 2023"}
                  timeline_title={"Web Development Intern"}
                  location={" "}
                  details={
                    "I have worked as a Fronted Developer where my primary responsibilty was built the UI and responsive UI for mobile devices. "
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"Oct 2023 - Dec 2024"}
                  timeline_title={"Internshala Student Partner Program"}
                  location={"Internshala."}
                  details={
                    "Promoting Internshala campaigns in our college and helping student to find their Dream jobs & internships."
                  }
                />
              </div>
               
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
