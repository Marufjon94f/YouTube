import "./FoodDrink.scss";
import Doughnout from "../../assets/img/doughnout.jpg";

function FoodDrink ({title}) {
    return(
        
<div>
<li className="food-item">
<img className="dough-img" src={Doughnout} alt="dougnout" width="250" height="150"/>
<h5 className="food-title">{title}</h5>
<div className="middle-text">
<p>45k views  ·  2 months ago</p>
<p>Food & Drink</p></div>
</li>





</div>
           
        
    )
}
export default FoodDrink;