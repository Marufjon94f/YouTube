import "./VideoBar.scss"
import { Link } from "react-router-dom";
import Cover from "../../assets/img/Cover.png";


function VideoBar ({title}){

    return(
        
<div className="right-bar">
          <li className="rightbar-item">
            <Link className="links" to="/video">
              <img
                className="cover-img"
                src={Cover}
                alt="cover-img"
                width="350"
                height="200"
              />
              <h5 className="rightbar-title">{title}</h5>
            
            <div className="rightbar-text">
              <p className="rightbar-text1">240k views · 4 months ago</p>
              <p className="rightbar-text2">Edward Osborne</p>
            </div></Link>
          </li>
        </div>


        
    )
}
export default VideoBar;