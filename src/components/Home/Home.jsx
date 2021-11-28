import "./Home.scss";

//components
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeTop from "../../components/HomeTop/HomeTop";

import { useState } from "react";
import { useEffect } from "react";

//images
import blair from "../../assets/img/bigblair.png";
import Arrow from "../Library/Svg/arrow";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="home">
      <Sidebar />

      <div className="home-main__content">
        <div className="home-main__channel">
          <img
            className="blair"
            src={blair}
            alt="channel picture"
            width="35"
            height="35"
          />
          <p className="blair-text">Dollie Blair</p>
          <div className="arrow"><Arrow/></div>
          
        </div>
        <div className="home__content">
          {items.length > 0 && (
            <ul className="home-top-list">
              {items.map((video) => (
                <HomeTop key={video.id} title={video.title} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
