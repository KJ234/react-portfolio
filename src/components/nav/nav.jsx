import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>

      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#projects">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#projects2">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#contact">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
