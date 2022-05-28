import "./about.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiMaterializecss } from "react-icons/di";

function About() {
  return (
    <section class="about" id="about">
      <h1 class="heading">About Me</h1>

      <div class="content">
        <h3 class="name">
          My name is <span>Komal Javed</span>
        </h3>
        <p>
          Hello, my name is Komal Javed, and I am a software Developer in the
          making. Front-end web developer, I have increased my expertise in
          JavaScript, CSS, React.js, and responsive web design to a much higher
          degree, competed in code contests, and completed personal coding
          projects and assignments while getting a certificate in full stack
          development from the University of Birmingham Coding Boot Camp.
        </p>
        <p>
          My goal with each project is to fully engage my audience for a
          memorable user experience. In past projects, I used UX and responsive
          design techniques. I was part of a three-person team that created a
          mood tracking software that allows people to track their own and their
          friends' moods throughout the week. I'm looking forward to continuing
          my education and gaining a deeper understanding of emerging subjects.
          Please also check out my github profile and résumé. Let us connect
          with one another.
        </p>
      </div>
      <div class="contain">
        <div class="skills">
          <h1> Technical Skills: </h1>
          <ul>
            <li>
              Programming Languages: HTML, CSS, Javascript
              <AiFillHtml5 className="= icon active-nav" />
              <FaCss3Alt className="= icon active-nav" />
              <DiJavascript1 className="= icon active-nav" />
            </li>
            <br />
            <li>
              Database Management: Mysql, Sequelize MongoDb, Mongoose
              <SiMysql className="= icon active-nav" />
              <SiSequelize className="= icon active-nav" />
              <DiMongodb className="= icon active-nav" />
            </li>
            <br />
            <li>
              Libraries / Frameworks: jQuery, React.js, Redux, Express.js,
              Bootstrap, Materialize
              <DiJqueryLogo className="= icon active-nav" />
              <FaReact className="= icon active-nav" />
              <SiRedux className="= icon active-nav" />
              <DiBootstrap className="= icon active-nav" />
              <DiMaterializecss className="= icon active-nav" />
            </li>
            <br />
            <li>
              Other Technologies: Node.js, chart.js, Handlebars, Git, Heroku,
              JWT Auth, AJAX, IndexedDB API
              <FaNodeJs className="= icon active-nav" />
              <SiHandlebarsdotjs className="= icon active-nav" />
              <SiHeroku className="= icon active-nav" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;
