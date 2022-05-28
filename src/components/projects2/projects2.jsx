import "./projects2.css";
import img7 from "../props/weather.png";
import { AiFillGithub } from "react-icons/ai";
import img8 from "../props/day.png";
import img9 from "../props/code quiz.gif";
import img10 from "../props/cv.png";
import img11 from "../props/project 1.png";
import img12 from "../props/cocktail.gif";

const projects2 = () => {
  return (
    <section class="projects" id="projects2">
      <h1 class="heading">My Work</h1>

      <div class="box-container">
        <div class="box">
          <a href="https://kj234.github.io/weather-dashboard/">
            <img src={img7} alt="of a weather and search tool" />
            <p>weather-dashboard</p>
          </a>
          <a href="https://github.com/KJ234/weather-dashboard.git">
            {" "}
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>

        <div class="box">
          <a href="https://kj234.github.io/workday-scheduler/">
            <img src={img8} alt="several items" />
            <p>workday-scheduler</p>
          </a>
          <a href="https://github.com/KJ234/workday-scheduler.git">
            {" "}
            <AiFillGithub className="= icon active-nav" />{" "}
          </a>
        </div>

        <div class="box">
          <a href="https://github.com/KJ234/code-quiz/settings/pages">
            <img src={img9} alt="showing a code quiz" />
            <p>code-quiz</p>
          </a>
          <a href="https://github.com/KJ234/code-quiz.git">
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>
      </div>

      <div class="box-container">
        <div class="box">
          <a href="https://kj234.github.io/CV-ME/">
            <img src={img10} alt=" my cv" />
            <p>CV-ME</p>
          </a>
          <a href="https://github.com/KJ234/CV-ME.git">
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>

        <div class="box">
          <a href="https://sikandersultan.github.io/Project-1/">
            <img src={img11} alt="showing  a food website" />
            <p>Project 1</p>
          </a>
          <a href="https://github.com/sikandersultan/Project-1.git">
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>

        <div class="box">
          <a href="https://sikandersultan.github.io/Project-1/">
            <img src={img12} alt="showing a  drinks website" />
            <p>Project 1</p>
          </a>
          <a href="https://github.com/sikandersultan/Project-1.git">
            <AiFillGithub className="= icon active-nav" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default projects2;
