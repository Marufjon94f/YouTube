import "./Home.scss";

//components
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeTop from "../../components/HomeTop/HomeTop";

import { useState } from "react";
import { useEffect } from "react";

//images
import blair from "../../assets/img/bigblair.png";
import ArrowL from "../Library/Svg/arrowleft";
import ArrowR from "../Library/Svg/arrowright";
import HomeMiddle from "../HomeMiddle/HomeMiddle";
import FoodDrink from "../FoodDrink/FoodDrink";
import Food from "../../assets/img/fd.png";
import Videocart from "../../components/Videocart/Videocart";
import ChannelPage from "../ChannelPage/ChannelPage";
import {Switch, Route} from "react-router";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=89")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div>
          <div><Switch>
            <Route path="/channel" component={ChannelPage} > 
              
              </Route></Switch></div>
              <Switch>
         <Route path="/" component={Home} exact>
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
              <div className="arrow">
                <div className="arrow-left">
                  <ArrowL />
                </div>
                <div>
                  <ArrowR />
                </div>
              </div>
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
          <div className="rec-box">
            <h4 className="recommended">Recommended</h4>
            <div className="arrow">
              <div className="arrow-box">
                <ArrowL />
              </div>
              <div>
                <ArrowR />
              </div>
            </div>
          </div>

          <div className="home-middle">
            {items.length > 0 && (
              <ul className="home-middlie-list">
                {items.map((video) => (
                  <HomeMiddle key={video.id} title={video.title} />
                ))}
              </ul>
            )}
          </div>

          <div className="mainfood-wapper">
            <div className="food-wapper">
              <img
                className="food-channel__img"
                src={Food}
                alt="food-drink"
                width="50"
                height="50"
              />
              <p className="food-channel__title">Food & Drink</p>
              <p className="food-channel__text">Recommended channel for you</p>
            </div>
            
            <div className="arrow">
              <div className="arrow-box">
                <ArrowL />
              </div>
              <div>
                <ArrowR />
              </div>
            </div>
            
          </div>
          <div className="home-food">
            {items.length > 0 && (
              <ul className="food-list">
                {items.map((video) => (
                  <FoodDrink key={video.id} title={video.title} />
                ))}
              </ul>
            )}
          </div>
          </Route>
          </Switch>
        </div>
         <Switch>
        <Route path="/video" component={Videocart}>
        <Videocart/>
        </Route>
      </Switch>
      </div>
      
     
    </>
  );
}

export default Home;
