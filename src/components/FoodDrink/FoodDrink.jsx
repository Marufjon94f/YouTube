import "./FoodDrink.scss";
import Doughnout from "../../assets/img/doughnout.jpg";
import { Link } from "react-router-dom";

function FoodDrink ({title}) {
    return(
        
<div>
<li className="food-item">
<Link className="links" to="/video">
<img className="dough-img" src={Doughnout} alt="dougnout" width="250" height="150"/>
<h5 className="food-title">{title}</h5>
<div className="middle-text">
<p>45k views  ·  2 months ago</p>
<p>Food & Drink</p></div></Link>
</li>
</div>
           
        
    )
}
export default FoodDrink;