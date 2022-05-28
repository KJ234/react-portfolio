import "./projects.css";
import img1 from "../props/Tablet.png";
import img2 from "../props/ecom giphy.gif";
import img3 from "../props/giphy.gif";
import img4 from "../props/Screenshot 2022-04-18 175325.png";
import img5 from "../props/Screenshot 2022-04-18 173502.png";
import img6 from "../props/read.gif";
import { AiFillGithub } from "react-icons/ai";

const projects = () => {
  return (
    <section class="projects" id="projects">
      <h1 class="heading">My Work</h1>
      <div class="box-container">
        <div class="box">
          <a href="https://mood-tracker-gkl.herokuapp.com/">
            <img src={img1} alt="" />
            <p>Mood Tracker</p>
          </a>
          <a href="https://github.com/KJ234/Mood-Tracker.git">
            {" "}
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>

        <div class="box">
          <a href="https://github.com/KJ234/E-Commerce-Back-End.git">
            <img src={img2} alt="gif of a set of questions in a terminal" />
            <p>E-Commerce-Back-End</p>
          </a>
          <a href="https://github.com/KJ234/E-Commerce-Back-End.git">
            {" "}
            <AiFillGithub className="= icon active-nav" />{" "}
          </a>
        </div>

        <div class="box">
          <a href="https://github.com/KJ234/employee-management.git">
            <img src={img3} alt="gif of a set of questions in terminal" />
            <p>employee-management</p>
          </a>
          <a href="https://github.com/KJ234/employee-management.git">
            {" "}
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>
      </div>

      <div class="box-container">
        <div class="box">
          <a href="https://hidden-mountain-88459.herokuapp.com/">
            <img src={img4} alt="" />
            <p>note-pad</p>
          </a>
          <a href="https://github.com/KJ234/note-pad.git">
            {" "}
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>
        <div class="box">
          <a href="https://github.com/KJ234/build-a-team/blob/ec7f2004b1f8b3e73854c2d9b1fcfb1e3f6a155b/Example/index.html">
            <img src={img5} alt="" />
            <p>build-a-team</p>
          </a>
          <a href="https://github.com/KJ234/build-a-team.git">
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>

        <div class="box">
          <img src={img6} alt="" />
          <p>README.MD-generator</p>
          <a href="https://github.com/KJ234/README.MD-generator.git">
            {" "}
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default projects;
