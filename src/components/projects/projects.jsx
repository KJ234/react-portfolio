import "./projects.css";
import img1 from "../props/Tablet.png";
import img2 from "../props/ecom giphy.gif";

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
        </div>

        <div class="box">
          <a href="https://github.com/KJ234/E-Commerce-Back-End.git">
            <img src={img2} alt="gif of a set of questions in a terminal" />
            <p>E-Commerce-Back-End</p>
          </a>
        </div>

        <div class="box">
          <a href="https://github.com/KJ234/employee-management.git">
            <img
              src="./images/giphy.gif"
              alt="gif of a set of questions in terminal"
            />
            <p>employee-management</p>
          </a>
        </div>
      </div>

      <div class="box-container">
        <div class="box">
          <a href="https://hidden-mountain-88459.herokuapp.com/">
            <p>note-pad</p>
          </a>
        </div>
        <div class="box">
          <p>build-a-team</p>
        </div>

        <div class="box">
          <p>README.MD-generator</p>
        </div>
      </div>
    </section>
  );
};

export default projects;
