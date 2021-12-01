import "./ChannelBottom.scss";
import pineapple from "../../assets/img/pineapple.png";
import { Link } from "react-router-dom";

function ChannelBottom({ title }) {
  return (
    <>
      <li className="home-bottom-item">
        <Link className="links" to="/video">
          <img
            className="home-bottom__img"
            src={pineapple}
            alt="pic"
            width="250"
            height="150"
          ></img>
          <h5 className="home-bottom__text">{title}</h5>
        
        <ul className="home-bottom_sublist">
          <li className="home-bottom_item">
            <span className="text-tube">80k views</span>
          </li>
          <li className="home-bottom_item">
            <span className="text-tube">3 days ago</span>
          </li>
          <li className="home-bottom_item">
            <span className="text-tube">Dollie Blair</span>
          </li>
        </ul></Link>
      </li>
    </>
  );
}
export default ChannelBottom;
