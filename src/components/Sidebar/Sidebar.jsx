import "./Sidebar.scss";
import { Link } from "react-router-dom";

//other images
import gussie from "../../assets/img/gussie.jpg";
import nora from "../../assets/img/nora.jpg";
import belle from "../../assets/img/belle.jpg";
import eunice from "../../assets/img/eunice.jpg";
import emma from "../../assets/img/emma.jpg";
import leah from "../../assets/img/leah.jpg";

//SVG images
import Homepic from "../Library/Svg/home";
import Trending from "../Library/Svg/trending";
import Subscription from "../Library/Svg/subscriptions";
import Library from "../Library/Svg/library";
import History from "../Library/Svg/history";
import Watch from "../Library/Svg/watch";
import Favourite from "../Library/Svg/favourite";
import Like from "../Library/Svg/like";
import Music from "../Library/Svg/music";
import Games from "../Library/Svg/games";
import Showmore from "../Library/Svg/showmore";
import Settings from "../Library/Svg/settings";

function Sidebar() {
  const handleAddClass = (evt) => {
    const allActiveClasses = document.querySelectorAll(".link-active");

    allActiveClasses.forEach((link) => link.classList.remove("link-active"));
    evt.currentTarget.classList.add("link-active");
  };
  return (
    <div className="sidebar">
      <ul className="top-list">
        <li className="top-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Homepic />
            <span className="text">Home</span>
          </Link>
        </li>
        <li className="top-item">
          <Link className=" link" to="/" onClick={handleAddClass}>
            <Trending />
            <span className="text">Trending</span>
          </Link>
        </li>
        <li className="top-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Subscription />
            <span className="text">Subscriptions</span>
          </Link>
        </li>
      </ul>

      <ul className="mid-list">
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Library />
            <span className="text">Library</span>
          </Link>
        </li>
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <History />
            <span className="text">History</span>
          </Link>
        </li>
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Watch />
            <span className="text">Watch later</span>
          </Link>
        </li>
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Favourite />
            <span className="text">Favourites</span>
          </Link>
        </li>
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Like />
            <span className="text">Liked videos</span>
          </Link>
        </li>
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Music />
            <span className="text">Music</span>
          </Link>
        </li>
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Games />
            <span className="text">Games</span>
          </Link>
        </li>
        <li className="mid-item">
          <Link className="link" to="/" onClick={handleAddClass}>
            <Showmore />
            <span className="text">Showmore</span>
          </Link>
        </li>
      </ul>

      <div className="subscribed-users">
        <h3>Subscriptions</h3>
        <ul className="subscriptions-list">
          <li className="subscriptions-item">
            <Link className="link" to="/" onClick={handleAddClass}>
              <img className="sub-img" src={gussie} alt="pic"></img>
              <p className="sub-username">Gussie Singleton</p>
            </Link>
          </li>
          <li className="subscriptions-item">
            <Link className="link" to="/" onClick={handleAddClass}>
              <img className="sub-img" src={nora} alt="pic"></img>
              <p className="sub-username">Nora Francis</p>
            </Link>
          </li>
          <li className="subscriptions-item">
            <Link className="link" to="/" onClick={handleAddClass}>
              <img className="sub-img" src={belle} alt="pic"></img>
              <p className="sub-username">Belle Briggs</p>
            </Link>
          </li>
          <li className="subscriptions-item">
            <Link className="link" to="/" onClick={handleAddClass}>
              <img className="sub-img" src={eunice} alt="pic"></img>
              <p className="sub-username">Eunice Cortez</p>
            </Link>
          </li>
          <li className="subscriptions-item">
            <Link className="link" to="/" onClick={handleAddClass}>
              <img className="sub-img" src={emma} alt="pic"></img>
              <p className="sub-username">Emma Hanson</p>
            </Link>
          </li>
          <li className="subscriptions-item">
            <Link className="link" to="/" onClick={handleAddClass}>
              <img className="sub-img" src={leah} alt="pic"></img>
              <p className="sub-username">Leah Berry</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="settings">
        <div className="sub-settings">
        <Link className="link" to="/" onClick={handleAddClass}>
          <Settings />
          <span className="text">Setting</span></Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
