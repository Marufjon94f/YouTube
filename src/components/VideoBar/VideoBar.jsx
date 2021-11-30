import "./VideoBar.scss"
import Cover from "../../assets/img/Cover.png";
import { Link } from "react-router-dom";

function VideoBar ({title}){

    return(
        
<div className="right-bar">
          <li className="rightbar-item">
            <Link to="/video">
              <img
                className="cover-img"
                src={Cover}
                alt="cover-img"
                width="350"
                height="200"
              />
              <h5 className="rightbar-title">{title}</h5>
            </Link>
            <div className="rightbar-text">
              <p>240k views · 4 months ago</p>
              <p>Edward Osborne</p>
            </div>
          </li>
        </div>


        
    )
}
export default VideoBar;