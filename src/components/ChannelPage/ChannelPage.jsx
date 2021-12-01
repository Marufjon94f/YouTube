import "./Channel.scss"
import { Link } from "react-router-dom";
import ChannelBottom from "../ChannelBottom/ChannelBottom";
// import { useEffect, useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { useState } from "react";

//images
import girl from "../../assets/img/girlsglass.png";
import search from "../../assets/img/search.png";
import knife from "../../assets/img/knife.png";
import man1 from "../../assets/img/man1.png";
import man2 from "../../assets/img/man2.png";
import man3 from "../../assets/img/man3.png";

function ChannelPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
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
        <li className="homel">
          <Link className="links" to="./">
            Home
          </Link>
        </li>

        <li className="homel">
          <Link className="links" to="./video">
            Videos
          </Link>
        </li>

        <li className="homel">
          <Link className="links" to="./video">
            Playlists
          </Link>
        </li>

        <li className="homel">
          <Link className="links" to="./channel">
            Channels
          </Link>
        </li>

        <li className="homel">
          <Link className="links" to="./video">
            Discussion
          </Link>
        </li>

        <li className="homel">
          <Link className="links" to="./">
            About
          </Link>
        </li>

        <li className="homel">
          <Link className="links" to="./video">
            <img src={search} alt="search" width="12" height="12" />
          </Link>
        </li>
      </ul>

      <div className="knife-box">
        <Link className="link-vid" to="./video">
          <img
            className="knifie"
            src={knife}
            alt="knife"
            width="550"
            height="300"
          />
        </Link>
        <div className="knife-box__wrapper">
          <h3 className="kinfe-title">
            Choosing The Best Audio Player Software For Your Computer
          </h3>
          <p className="knife-text">
            Your cheap internet-based banner advertising will become one of the
            sought for ads there are. Today, the world of Internet advertising
            is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles
            A common medium for advertising on the Internet is the use of banner
            ads.
          </p>
          <p className="knife-texts">11k views · 6 months ago</p>
        </div>
        <div className="channel-right-bar">
          <span className="recommended-channel">Recommended channel</span>
          <ul className="kinfe-list">
            <li className="kinfe-item">
              <img src={man1} alt="man" width="40" height="40" />
              <h5 className="knife-user">Flora Benson</h5>
            </li>
            <li className="kinfe-item">
              <img src={man2} alt="man" width="40" height="40" />
              <h5 className="knife-user">Violet Cobb</h5>
            </li>
            <li className="kinfe-item">
              <img src={man3} alt="man" width="40" height="40" />
              <h5 className="knife-user">Phillip Mullins</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-bottom-lists-wrapper">
        <h3 className="home-bottom-lists__heading">Margaret Phelps videos</h3>
        <ul className="home-bottom-list">
          {items.map((video) => (
            <ChannelBottom key={video.id} title={video.title} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ChannelPage;
