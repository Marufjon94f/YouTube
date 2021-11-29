import "./Videocart.scss";
import { useEffect, useState } from "react";
import Dots from "../Library/Svg/dots";
import Oval from "../../assets/img/Oval.jpg";

function Videocart() {
  const [counter, setCounter] = useState(123);

  useEffect(() => {}, []);

  const [mcounter, setMcounter] = useState(435);

  return (
    <div>
      <div className="video-youtube">
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/wC-4aR4SgLU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        ;<h4>Dude You Re Getting A Telescope</h4>
        <div className="vid-box">
          <p>123k views</p>
          <div className="button-box">
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={() => setMcounter(mcounter - 1)}>
              {mcounter}
            </button>
            <button>share</button>
          </div>
          <div className="decription">
            <Dots />
          </div>
        </div>
        
        <img src={Oval} alt="food" width="80" height="70" />
        
      </div>
    </div>
  );
}

export default Videocart;
