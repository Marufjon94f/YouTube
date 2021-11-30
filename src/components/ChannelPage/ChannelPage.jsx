import "./ChannelPage.scss";

import girl from "../../assets/img/girlsglass.png";
import search from "../../assets/img/search.png";
import { Link } from "react-router-dom";
import knife from "../../assets/img/knife.png";

function ChannelPage() {
  return (
    <div>
      <div className="background-box"></div>
      <div className="channel-name">
        <img src={girl} alt="girl" width="60" height="60" />
        <div className="margaret-box">
          <h3 className="margaret">Margaret Phelps</h3>
          <p className="margaret_text">245K subscribed</p>
        </div>
        <div className="subscribe-box">
          <button className="subscribe" type="submit">
            Subsrcibe 2.3m
          </button>
        </div>
      </div>

      <ul className="homel-list">
        <Link>
          <li className="homel" to="/">
            Home
          </li>
        </Link>
        <Link>
          <li className="homel" to="/video">
            Videos
          </li>
        </Link>
        <Link>
          <li className="homel" to="/">
            Playlists
          </li>
        </Link>
        <Link>
          {" "}
          <li className="homel" to="/channel">
            Channels
          </li>
        </Link>
        <Link>
          {" "}
          <li className="homel" to="/">
            Discussion
          </li>
        </Link>
        <Link>
          {" "}
          <li className="homel" to="/">
            About
          </li>
        </Link>
        <Link>
          {" "}
          <li className="homel">
            <img src={search} alt="search" width="12" height="12" />
          </li>
        </Link>
      </ul>

      <div className="knife-box">
        <img src={knife} alt="knife" width="450" height="200" />
        <div>
          <h3 className="kinfe-title">Choosing The Best Audio Player Software For Your Computer</h3>
          <p className="knife-text">
            Your cheap internet-based banner advertising will become one of the
            sought for ads there are. Today, the world of Internet advertising
            is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles
            A common medium for advertising on the Internet is the use of banner
            ads.
          </p >
          <p className="knife-texts">11k views  ·  6 months ago</p>
        </div>
      </div>
    </div>
  );
}
export default ChannelPage;
