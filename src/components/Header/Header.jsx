import { Link } from "react-router-dom";
import "./Header.scss";

//SVG images
import Hamburger from "../Library/Svg/hamburger";
import Youtube from "../Library/Svg/youtube";
import Camera from "../Library/Svg/camera";
import Combined from "../Library/Svg/combined";
import Ringbell from "../Library/Svg/ringbell";
import Userpic from "../../assets/img/Userpic.png";

function Header() {
  return (
    <div className="header">
      <div className="left-header">
       <div className="hamburger"><Hamburger /></div> 
        <div className="youtube">
        <Link className="logo-youtube" to="/"><Youtube /></Link>
          
        </div>
      </div>

      <div className="mid-header">
        <form>
          <input className="input" type="search" placeholder="search"></input>
        </form>
      </div>

      <div className="right-header">
        <ul className="right-header__list">
          <li>
            <Camera />
          </li>
          <li>
            <Combined />
          </li>
          <li>
            <Ringbell />
          </li>
          <li>
            <img  src={Userpic} alt="pic"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
