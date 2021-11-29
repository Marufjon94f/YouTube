import "./HomeMiddle.scss";
import Cover from "../../assets/img/Cover.png"

function HomeMiddle ({title}) {
    return(
<div>
<li className="home-middlie-item">
<img className="cover-img" src={Cover} alt="cover-img" width="350" height="200"/>
<h5 className="middle-title">{title}</h5>
<div className="middle-text">
<p>240k views  ·  4 months ago</p>
<p>Edward Osborne</p></div>
</li>





</div>

    )
}
export default HomeMiddle;