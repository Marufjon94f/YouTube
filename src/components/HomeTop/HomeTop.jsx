import "./HomeTop.scss"
import Landing from "../../assets/img/landing.jpg"
import { Link } from "react-router-dom";


function HomeTop({title}) {
    return(
       
        
<div className="home-top">

<li className="home-top-item">
<Link className="links" to="/video"><img className="home-top__pic" src={Landing} 
        alt="pic"
        width="250"
        height="150"
        ></img>
        <h5 className="home-top__text">{title}</h5>
        <ul className="home-top_sublist">
            <li className="home-top_item"><span className="text-tube">80k views</span></li>
            <li className="home-top_item"><span className="text-tube">3 days ago</span></li>
            <li className="home-top_item"><span className="text-tube">Dollie Blair</span></li>
        </ul></Link>
</li>


</div>


    )
}
export default HomeTop;