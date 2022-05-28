import "./home.css";
import Nav from "../nav/nav";
import img from "../props/avatar.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

function links() {
  return (
    <div class="container">
      <section class="home" id="home">
        <h3>Hi there...</h3>
        <h3 class="name">
          My name is <span>Komal Javed</span>
        </h3>
        <h3 class="post">
          I am a <span class="typing-text">Full Stack Developer</span>
        </h3>

        <img src={img} alt="" />

        <div class="share">
          <a href="https://github.com/KJ234">
            {" "}
            <AiOutlineGithub className="= icon active-nav" />{" "}
          </a>

          <a href="www.linkedin.com/in/komal-javed-2b55a3232">
            <AiOutlineLinkedin className="= icon active-nav" />
          </a>

          <a href="https://kj234.github.io/CV-ME/">
            <AiOutlineLink className="= icon active-nav" />{" "}
          </a>
          <Nav />
        </div>
      </section>
    </div>
  );
}

export default links;
