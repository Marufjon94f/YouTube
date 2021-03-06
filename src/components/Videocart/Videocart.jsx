import "./Videocart.scss";
import { useEffect, useState } from "react";

//pages
import Dots from "../Library/Svg/dots";
import Oval from "../../assets/img/Oval.jpg";
import Likes from "../Library/Svg/likes";
import Dislikes from "../Library/Svg/dislikes";
import VideoBar from "../VideoBar/VideoBar";

function Videocart() {
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(123);

  useEffect(() => {}, []);

  const [mcounter, setMcounter] = useState(435);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=89")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="video-page">
      
      <div className="video-youtube">
        <iframe
          className="iframe-youtube"
          width="900"
          height="506"
          src="https://www.youtube.com/embed/wC-4aR4SgLU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        <h4 className="dude">Dude You Re Getting A Telescope</h4>
        <div className="vid-box">
          <p className="views">123k views</p>
          <div className="button-box">
            <button
              className="like-button"
              onClick={() => setCounter(counter + 1)}
            >
              <span>
                <Likes />
              </span>
              {counter}
            </button>
            <button
              className="dislike-button"
              onClick={() => setMcounter(mcounter - 1)}
            >
              <span>
                <Dislikes />
              </span>
              {mcounter}
            </button>
            <button className="share-button">share</button>
          </div>
          <div className="description">
            <Dots />
          </div>
        </div>

<div className="subvideo-box">
        <div className="subvideo">
          <img className="food-pic" src={Oval} alt="food" width="80" height="70" />
        </div>
        <div className="subvideo-text">
          <h3 className="foodsub__title">Food & Drink</h3>
          <p className="foodsub__text1">Published on 14 Jun 2019</p>
          <p className="foodsub__text2">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy; it is based on a
            number of factors, including ad placement, demographic, even the
            consumer???s mood when they see your ad.
          </p>
        </div></div>
      </div>
      <div className="rightbar-video">
      <div className="next-auto">
          <h2 className="next">Next</h2>
          <p className="autoplay">Autoplay</p>
        </div>
        {items.length > 0 && (
          <ul className="home-rightbar__list">
            {items.map((video) => (
              <VideoBar key={video.id} title={video.title} />
            ))}
          </ul>
        )}
      </div>


    </div>
  );
}

export default Videocart;
